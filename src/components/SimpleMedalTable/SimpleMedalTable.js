import React from "react";

import styled from "./SimpleMedalTable.pcss";
import Flags from "../flags";
import cs from "classnames";

import { medalTableData } from "../../../fixtures/medalTable";
import Cell from "../TableComponents/Cell";

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

function renderMedalRow(rowData) {
  return rowData?.map((row) => (
    <tr
      key={`${row.id} - ${row.countryCode}`}
      className={cs(styled.medalTableRow)}
    >
      <Cell theme={'medalTable'}>
        {row.medalRank}
      </Cell>
      <Cell theme={'medalTable'}>
        {<Flags flagName={row.countryCode} />}
      </Cell>
      <Cell theme={'medalTable'} >{row.countryName}</Cell>
      <Cell className={cs(styled.medal, styled.gold)}>{row.gold}</Cell>
      <Cell className={cs(styled.medal, styled.silver)}>{row.silver}</Cell>
      <Cell className={cs(styled.medal, styled.bronze)}>{row.bronze}</Cell>
      <Cell className={cs(styled.medal, styled.medalTableCell)}>
        {row.total}
      </Cell>
    </tr>
  ));
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
        <tbody className={styled.medalTableBody}>{renderMedalRow(data)}</tbody>
      </table>
    </div>
  );
}

export default SimpleMedalTable;
