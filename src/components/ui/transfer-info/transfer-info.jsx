import React from "react";

function TransferInfo({segments}) {
  return (
    <div className="transfer-info">
      {segments.map((segment) => (
        <table className="transfer-info__flight" key={segment.id}>
          <thead>
            <tr className="transfer-info__heading">
              <th>{segment.origin} - {segment.destination}</th>
              <th>В пути</th>
              <th>{segment.stops.length} пересад{
                segment.stops.length === 0 ? "ок" : segment.stops.length === 1 ? "ка" : segment.stops.length > 1 ? "ки" : null }</th>
            </tr>
          </thead>
          <tbody>
            <tr className="transfer-info__description">
              <td>*** (10:45 - 08:00)</td>
              <td>*** (21ч 15м)</td>
              <td>{segment.stops.join(", ")}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default TransferInfo;