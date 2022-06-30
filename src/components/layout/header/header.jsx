import React from "react";
import Logo from "../../ui/logo/logo";

function Header() {
  return (
    <header className="page-header">
      <h1 className="page-header__title">Билеты по заданному маршруту</h1>
      <Logo />
    </header>
  );
}

export default Header;