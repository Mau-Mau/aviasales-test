import React from "react";
import Tabs from "../../ui/tabs/tabs";
import TicketList from "../../ui/ticket-list/ticket-list";
import Button from "../../ui/button/button";

function TicketInfo() {
  return (
    <section class="ticket-info">
        <Tabs />
        <TicketList>
        </TicketList>
        <Button>Показать еще 5 билетов!</Button>
    </section>
  );
}

export default TicketInfo;