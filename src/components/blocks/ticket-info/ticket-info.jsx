import React from "react";
import Tabs from "../../ui/tabs/tabs";
import TicketList from "../../ui/ticket-list/ticket-list";
import Button from "../../ui/button/button";

function TicketInfo({tickets}) {
  return (
    <section className="ticket-info">
      {tickets?.length ? (
        <>
          <Tabs />
          <TicketList tickets={tickets} />
          <Button>Показать еще 5 билетов!</Button>
        </>
      ) : null}
    </section>
  );
}

export default TicketInfo;