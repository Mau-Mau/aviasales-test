import React from "react";
import TicketCard from "../ticket-card/ticket-card";

function TicketList() {
  return (
    <ul class="ticket-list">
      <li class="ticket-list__item">
        <TicketCard />
      </li>
    </ul>
  );
}

export default TicketList;