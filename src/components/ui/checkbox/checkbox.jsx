import React from "react";

function Checkbox() {
  return (
    <div class="checkbox">
      <input class="checkbox__input" id="all-transfer" name="all-transfer" type="checkbox" />
      <label class="checkbox__label" for="all-transfer">
        <span class="checkbox__text">Все</span>
      </label>
    </div>
  );
}

export default Checkbox;