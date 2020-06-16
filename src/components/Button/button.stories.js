import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./";

storiesOf("Buttons", module).add("Download Button", () => {
  const message = "Download";
  const component = <Button type="download">{message}</Button>;
  return component;
});
