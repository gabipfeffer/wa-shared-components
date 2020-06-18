import React from "react";

import styled from "./SimpleMedalTable.pcss";
import Flags from "../flags";

import { medalTableData } from "../../../fixtures/medalTable";

const headers = [
  { value: "Rank" },
  { value: "Nat" },
  { value: "Country" },
  { value: "Gold" },
  { value: "Silver" },
  { value: "Bronze" },
  { value: "Total" },
];
function renderHeaders(arr) {
  return (
    <tr>
      {arr.map((el, i) => (
        <td key={i}>{el.value}</td>
      ))}
    </tr>
  );
}

function renderMedalRow(rowData) {
  return rowData?.map((row) => (
    <tr key={`${row.id} - ${row.countryCode}`}>
      <td>{row.medalRank}</td>
      <td>{<Flags flagName={row.countryCode} />}</td>
      <td>{row.countryName}</td>
      <td>{row.gold}</td>
      <td>{row.silver}</td>
      <td>{row.bronze}</td>
      <td>{row.total}</td>
    </tr>
  ));
}

function SimpleMedalTable({
  eventTitle = "World Athletics Championships DOHA 2019",
  data = medalTableData,
}) {
  return (
    <div>
      <div>
        <p>{eventTitle}</p>
      </div>
      <table>
        <thead>{renderHeaders(headers)}</thead>
        <tbody>{renderMedalRow(data)}</tbody>
      </table>
    </div>
  );
}

export default SimpleMedalTable;
