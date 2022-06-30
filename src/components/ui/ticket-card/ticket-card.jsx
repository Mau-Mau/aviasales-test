import React from "react";
import Price from "../price/price";
import AirlineIcon from "../airline-icon/airline-icon";
import TransferInfo from "../transfer-info/transfer-info";

function TicketCard({ticket}) {
  return (
    <div className="ticket-card">
      <div className="ticket-card__scope">
        <Price>{ticket.price}</Price>
        <AirlineIcon carrier={ticket.carrier}></AirlineIcon>
      </div>
      <TransferInfo segments={ticket.segments}></TransferInfo>
    </div>
  );
}

export default TicketCard;