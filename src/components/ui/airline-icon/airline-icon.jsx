import React from "react";

function AirlineIcon({carrier}) {
  const carrierSrc = `../../../assets/logo-${carrier}.svg`;

  return <img 
    width={110} 
    height={36} 
    src={carrierSrc}
    alt={carrier}
  ></img>;
}

export default AirlineIcon;