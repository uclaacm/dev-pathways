import React from "react";
import "./Results.css";
import SearchandSuggested from "../../components/SearchandSuggested/SearchandSuggested";
import { useParams } from "react-router-dom";
import { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchOptions from "../../components/SearchOptions/SearchOptions";
import SearchingArt from "../../img/searching_art.svg";
import ResultFilter from "../../components/ResultFilter/ResultFilter";
import ResultsBody from "../../components/ResultsBody/ResultsBody";
const Results = () => {
  const param = useParams();
  const [text, setText] = useState(decodeURIComponent(param.userText));
  const [SearchSelected, setSearchSelected] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});

  const search = (input) => {
    console.log(`searched for ${input}`);
    setText(input);
  };

  return (
    <div>
      <PageHeader
        header="Search Results"
        subheader={<SearchandSuggested searchFunction={search} text={text} />}
        img={SearchingArt}
      />

      <SearchOptions
        SearchState={SearchSelected}
        onClick={() => setSearchSelected(!SearchSelected)}
      />
      <div className="results-page-section display-desktop">
        <ResultsBody text={text} checkedItems={checkedItems} />
        <ResultFilter
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
          text={text}
        />
      </div>
      <div className="results-page-section display-phone">
        {SearchSelected ? (
          <ResultsBody text={text} checkedItems={checkedItems} />
        ) : (
          <ResultFilter
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
            text={text}
          />
        )}
      </div>
    </div>
  );
};

export default Results;
