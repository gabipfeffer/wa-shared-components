import React from "react";
import Cell from "../Cell";
import { getCellContent } from "../../../utils/getCellContent";

function Row({ row }) {
  return (
    <>
      <tr>{renderCells(row)}</tr>
    </>
  );

  function renderCells({ data }) {
    return data.map((col, index) => {
      const content = getCellContent(col);
      return (
        <Cell key={index} theme={"medalTable"}>
          {content}
        </Cell>
      );
    });
  }
}

export default Row;
