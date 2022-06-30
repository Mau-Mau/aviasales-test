import React from "react";

function TransferInfo() {
  return (
    <div class="transfer-info">
      <table class="transfer-info__flight">
        <tr class="transfer-info__heading">
          <th>MOW - HKT</th>
          <th>В пути</th>
          <th>2 пересадки</th>
        </tr>
        <tr class="transfer-info__description">
          <td>10:45 - 08:00</td>
          <td>21ч 15м</td>
          <td>HKG, JNB</td>
        </tr>
      </table>
      <table class="transfer-info__flight">
        <tr class="transfer-info__heading">
          <th>HKT - MOW</th>
          <th>В пути</th>
          <th>1 пересадка</th>
        </tr>
        <tr class="transfer-info__description">
          <td>11:20 - 00:50</td>
          <td>13ч 30м</td>
          <td>HKG</td>
        </tr>
      </table>
    </div>
  );
}

export default TransferInfo;