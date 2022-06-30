import React from "react";

function Price({children}) {
  return (
    <p className="price">{children} р</p>
  );
}

export default Price;