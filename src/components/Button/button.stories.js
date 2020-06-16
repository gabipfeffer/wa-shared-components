import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./";

storiesOf("Shared Components", module).add("Oregon Need to know", () => {
  const message = "Download";
  const component = <Button type="download">{message}</Button>;
  return component;
});
