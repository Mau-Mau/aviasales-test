import React from "react";
import FilterItem from "../../ui/filter-item/filter-item";

function FilterList() {
  return (
    <section class="filter-list">
      <form 
        class="filter-list__form" 
        action="#" 
        method="POST">
        <FilterItem />
      </form>
    </section>
  );
}

export default FilterList;