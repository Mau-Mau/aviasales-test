import React from "react";
import Header from "../header/header";
import ResultPage from "../../pages/result-page/result-page";
import Footer from "../footer/footer";

export default function PageWrapper({...prop}) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main page-main">
        <ResultPage {...prop}/>
      </main>
      <Footer />
    </>
  );
}