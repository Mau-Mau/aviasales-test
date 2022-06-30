import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import ticketList from "../../mocks/ticketList";
import filterList from "../../mocks/filterList";
import "./style.css";

export default function App() {
  return (
    <PageWrapper tickets={ticketList} filters={filterList}/>
  );
}
