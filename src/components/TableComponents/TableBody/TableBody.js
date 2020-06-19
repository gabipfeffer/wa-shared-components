import React from "react";

import styled from "./TableBody.pcss";
import Row from "../Row";

import isArrayWithData from "../../../utils/isArrayWithData";

function TableBody({ rows }) {
  return (
    <tbody className={styled.tableBody} >
      {isArrayWithData(rows) &&
        rows.map((row, index) => {
          return <Row key={index} row={row} />;
        })}
    </tbody>
  );
}

export default TableBody;
