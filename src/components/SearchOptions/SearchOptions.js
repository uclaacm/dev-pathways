import React from "react";
import "./SearchOptions.css";
import SolidButton from "../../components/SolidButton/SolidButton";
const SearchOptions = (props) => {

  return (
    <div className="result-selection">
      <SolidButton
        className={`result-${
          props.SearchState ? "nobackground-":""
        }button`}
        text="Results"
        onClick={props.onClick}
      />

      <SolidButton
        className={`result-${
          props.SearchState ?"" : "nobackground-"
        }button`}
        text="Filters"
        onClick={props.onClick}
      />
    </div>
  );
  
};

export default SearchOptions;
