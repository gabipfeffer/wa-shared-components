import React from "react";
import { storiesOf } from "@storybook/react";
import { ModalProvider } from "react-modal-hook";

import MedalTable from "./";
import { medalTableData } from "../../../fixtures/medalTable";

storiesOf("Medal Table", module).add("Medal Table", () => {
  const component = (
    <ModalProvider>
      <MedalTable data={medalTableData} />
    </ModalProvider>
  );
  return component;
});
