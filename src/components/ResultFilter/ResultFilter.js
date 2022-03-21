import React,{useState} from "react";
import "./ResultFilter.css";
import SolidButton from "../SolidButton/SolidButton";
import checkboxes from "../../data/checkboxes";
import Checkbox from "../Checkbox/Checkbox";
import DifficultyExplanation from '../DifficultyExplanation/DifficultyExplanation';

import { useNavigate } from "react-router-dom";
const ResultFilter = (props) => {
  const navigate = useNavigate();

  const handleChange = (event, category, predicate) => {
    props.setCheckedItems({
        ...props.checkedItems, [event.target.name]: {
            checked: event.target.checked,
            category: category,
            predicate: predicate,
        }
    });    
}
  return (
          <div className="filters-container">
            <SolidButton
              text="Generate Pathway"
              onClick={() => navigate("/quiz")}
            />
            {Object.keys(checkboxes).map((key) => (
              <div className="filter-category">
                <h3> {key} </h3>
                {checkboxes[key].names.map((item) =>
                  key !== "Experience Level" ? (
                    <div>
                      <Checkbox
                        name={item.name}
                        checked={props.checkedItems[item.name]?.checked}
                        onChange={(event) =>
                          handleChange(event, key, checkboxes[key].predicate)
                        }
                      />
                      <label key={item.name}>{item.name}</label>
                    </div>
                  ) : (
                    <div className="Experience-Level">
                      <Checkbox
                        name={item.name}
                        checked={props.checkedItems[item.name]?.checked}
                        onChange={(event) =>
                          handleChange(event, key, checkboxes[key].predicate)
                        }
                      />
                      <DifficultyExplanation difficulty={item.name} />
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
  );
};
export default ResultFilter;
