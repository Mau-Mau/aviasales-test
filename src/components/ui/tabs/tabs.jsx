import React from "react";
import Button from "../button/button";

function Tabs() {
  return (
    <div className="tabs">
      <Button>Самый дешевый</Button>
      <Button>Самый быстрый</Button>
      <Button>Оптимальный</Button>
    </div>
  );
}

export default Tabs;