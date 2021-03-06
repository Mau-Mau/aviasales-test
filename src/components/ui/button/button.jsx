import React from "react";

function Button({children, minWidth}) {
  return <button 
    className="button" 
    type="button"
    style={{minWidth: minWidth}}
  >{children}</button>;
}

export default Button;