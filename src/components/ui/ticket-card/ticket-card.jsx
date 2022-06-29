import React from "react";
import Price from "../price/price";
import AirlineIcon from "../airline-icon/airline-icon";
import TransferInfo from "../transfer-info/transfer-info";

function TicketCard() {
  return (
    <div class="ticket-card">
      <div class="ticket-card__scope">
        <Price />
        <AirlineIcon />
      </div>
      <TransferInfo />
    </div>
  );
}

export default TicketCard;