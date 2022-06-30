import React from "react";

function InputItem({filterOption, filterType}) {
  return (
    <div className={filterType}>
      <input className={`${filterType}__input`} id={filterOption.name} name={filterOption.name} type={filterType} />
      <label className={`${filterType}__label`} htmlFor={filterOption.name}>
        <span className={`${filterType}__text`}>{filterOption.label}</span>
      </label>
    </div>
  );
}

export default InputItem;