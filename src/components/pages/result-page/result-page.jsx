import React from "react";
import FilterList from "../../blocks/filter-list/filter-list";
import TicketInfo from "../../blocks/ticket-info/ticket-info";

function ResultPage({tickets, filters}) {
  return (
    <>
      <FilterList filters={filters}/>
      <TicketInfo tickets={tickets}/>
    </>
  );
}

export default ResultPage;