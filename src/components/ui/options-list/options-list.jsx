import React from "react";
import InputItem from "../input-item/input-item";

function OptionsList({filterOptions, ...prop}) {
  return (
      <ul className="options-list">
        {filterOptions.map((filterOption) => (
          <li className="options-list__item" key={filterOptions.id}>
            <InputItem filterOption={filterOption} {...prop}/>
          </li>
          ))}
        
      </ul>
  );
}

export default OptionsList;