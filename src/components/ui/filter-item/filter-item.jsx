import React from "react";
import OptionsList from "../options-list/options-list";

function FilterItem() {
  return (
    <fieldset class="filter-item">
      <legend class="filter-item__title">Количество пересадок</legend>
      <OptionsList />
    </fieldset>
  );
}

export default FilterItem;