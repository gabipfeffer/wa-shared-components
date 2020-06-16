import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { medalTableData } from '../../../fixtures/medalTable'

storiesOf("Table", module).add("Sample Table", () => {
  const headers = [
    "Rank",
    "Nat",
    "Country",
    "Gold",
    "Silver",
    "Bronze",
    "Total",
  ];
  const component = (
    <Table>
      <TableHeader rows={headers} />
      <TableBody />
    </Table>
  );
  return component;
});
