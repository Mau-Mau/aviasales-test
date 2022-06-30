import React from "react";

function Logo() {
  return (
    <a
      className="logo" 
      href="#">
      <img 
        className="logo__image"
        src="../../../assets/logo-aviasales.svg"  
        width="60" 
        height="60"
        alt="Aviasales logo"
      ></img>
    </a>
  );
}

export default Logo;