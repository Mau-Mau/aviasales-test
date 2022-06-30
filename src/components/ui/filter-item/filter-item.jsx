import React from "react";
import OptionsList from "../options-list/options-list";

function FilterItem({filter}) {
  return (
    <>
      <legend className="filter-item__title">{filter.title}</legend>
      <OptionsList filterOptions={filter.options} filterType={filter.type}/>
    </>
  );
}

export default FilterItem;