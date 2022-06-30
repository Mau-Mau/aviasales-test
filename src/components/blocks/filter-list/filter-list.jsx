import React from "react";
import FilterItem from "../../ui/filter-item/filter-item";

function FilterList({filters}) {
  return (
    <section className="filter-list">
      <form 
        className="filter-list__form" 
        action="#" 
        method="POST">
          {filters.map((filter) => (
            <fieldset className="filter-item" key={filters.id}>
            <FilterItem filter={filter}/>
            </fieldset>
          ))}
      </form>
    </section>
  );
}

export default FilterList;