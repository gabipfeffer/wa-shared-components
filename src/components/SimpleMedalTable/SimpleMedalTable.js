import React from "react";

import styled from "./SimpleMedalTable.pcss";
import Flags from "../flags";
import cs from "classnames";

import { medalTableData } from "../../../fixtures/medalTable";

const medalTitleStyle = {
  textAlign: "center",
};

const medalRankStyle = {
  paddingLeft: "20px",
};

const natStyle = {
  display: "flex",
  flexDirection: "row",
};

const headers = [
  { value: "Rank", style: medalRankStyle },
  { value: "Nat" },
  { value: "Country" },
  { value: "Gold", style: medalTitleStyle },
  { value: "Silver", style: medalTitleStyle },
  { value: "Bronze", style: medalTitleStyle },
  { value: "Total", style: medalTitleStyle },
];

function renderHeaders(arr) {
  return (
    <tr>
      {arr.map((el, i) => (
        <td key={i} className={styled.medalTableHeaderCell} style={el.style}>
          {el.value}
        </td>
      ))}
    </tr>
  );
}

function renderMedalRow(rowData) {
  return rowData?.map((row) => (
    <tr
      key={`${row.id} - ${row.countryCode}`}
      className={cs(styled.medalTableRow)}
    >
      <td className={cs(styled.medalTableCell, styled.medalRank)}>
        {row.medalRank}
      </td>
      <td className={cs(styled.medalTableCell, styled.countryFlag)}>
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
    <div className={styled.tableContainer}>
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
