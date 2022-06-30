import React from "react";
import TicketCard from "../ticket-card/ticket-card";

function TicketList({tickets}) {
  return (
    <ul className="ticket-list">
      {tickets.map((ticket) => (
        <li className="ticket-list__item" key={ticket.id}>
        <TicketCard ticket={ticket}/>
      </li>
      ))}
    </ul>
  );
}

export default TicketList;