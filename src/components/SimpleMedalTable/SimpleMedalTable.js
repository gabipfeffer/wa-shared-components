import React from "react";

import styled from "./SimpleMedalTable.pcss";
import Flags from "../flags";

import { medalTableData } from "../../../fixtures/medalTable";
import Cell from "../TableComponents/Cell";
import TableBody from "../TableComponents/TableBody";

const headers = [
  { value: "Rank" },
  { value: "Nat" },
  { value: "Country" },
  { value: "Gold" },
  { value: "Silver" },
  { value: "Bronze" },
  { value: "Total", hide: ["mobile"] },
];

function renderHeaders(arr) {
  return (
    <tr>
      {arr.map((el, i) => (
        <Cell
          tag={"th"}
          key={i}
          className={styled.medalTableHeaderCell}
          style={el.style}
        >
          {el.value}
        </Cell>
      ))}
    </tr>
  );
}

function transformData(data) {
  return data.map((rowData) => {
    const key = `${rowData.id}-${rowData.countryCode}`;
    return {
      data: [
        { key: `${key}-medalRank`, value: rowData.medalRank },
        {
          key: `${key}-countryCode`,
          value: <Flags flagName={rowData.countryCode} />,
        },
        { key: `${key}-countryName`, value: rowData.countryName },
        { key: `${key}-gold`, value: rowData.gold },
        { key: `${key}-silver`, value: rowData.silver },
        { key: `${key}-bronze`, value: rowData.bronze },
        { key: `${key}-total`, value: rowData.total },
      ],
    };
  });
}

function SimpleMedalTable({
  eventTitle = "World Athletics Championships DOHA 2019",
  data = medalTableData,
}) {
  return (
    <div className={styled.tableContainer}>
      <div className={styled.titleContainer}>
        <h3 className={styled.title}>{eventTitle}</h3>
      </div>
      <table cellPadding={0} cellSpacing={0} className={styled.table}>
        <thead className={styled.medalTableHeader}>
          {renderHeaders(headers)}
        </thead>
        <TableBody rows={transformData(data)} />
      </table>
    </div>
  );
}

export default SimpleMedalTable;
