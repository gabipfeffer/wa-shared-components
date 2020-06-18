import React from "react";

import styled from "./SimpleMedalTable.pcss";
import Flags from "../flags";
import cs from "classnames";

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
        <td key={i} className={styled.medalTableHeaderCell}>
          {el.value}
        </td>
      ))}
    </tr>
  );
}

function renderMedalRow(rowData) {
  return rowData?.map((row) => (
    <tr key={`${row.id} - ${row.countryCode}`}>
      <td className={cs(styled.medalTableCell)}>{row.medalRank}</td>
      <td className={cs(styled.medalTableCell)}>
        {<Flags flagName={row.countryCode} />}
      </td>
      <td className={cs(styled.medalTableCell)}>{row.countryName}</td>
      <td className={cs(styled.medal, styled.gold)}>{row.gold}</td>
      <td className={cs(styled.medal, styled.silver)}>{row.silver}</td>
      <td className={cs(styled.medal, styled.bronze)}>{row.bronze}</td>
      <td className={cs(styled.medal, styled.medalTableCell)}>{row.total}</td>
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
      <table cellPadding={0} cellSpacing={0} className={styled.table}>
        <thead className={styled.medalTableHeader}>
          {renderHeaders(headers)}
        </thead>
        <tbody className={styled.medalTableBody}>{renderMedalRow(data)}</tbody>
      </table>
    </div>
  );
}

export default SimpleMedalTable;
