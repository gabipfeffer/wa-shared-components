import React from "react";
import { storiesOf } from "@storybook/react";

import MedalTable from "./";
import { medalTableData } from '../../../fixtures/medalTable'

storiesOf("Medal Table", module).add("Medal Table", () => {
  const component = <MedalTable data={medalTableData} />;
  return component;
});
