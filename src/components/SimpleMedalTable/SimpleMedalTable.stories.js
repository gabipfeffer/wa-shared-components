import React from "react";
import { storiesOf } from "@storybook/react";
import { ModalProvider } from "react-modal-hook";

import SimpleMedalTable from "./";
import { medalTableData } from "../../../fixtures/medalTable";

storiesOf("Medal Table", module).add("Simple Medal Table", () => {
  const component = (
    <ModalProvider>
      <SimpleMedalTable data={medalTableData} />
    </ModalProvider>
  );
  return component;
});
