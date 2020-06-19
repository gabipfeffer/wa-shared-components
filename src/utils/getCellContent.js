import React, { isValidElement } from "react";

export function getCellContent(item) {
  let content = null;
  const isReactElement = isValidElement(item);

  if (isReactElement) {
    content = item;
  } else if (typeof item === "string") {
    content = item;
  } else if (typeof item === "object" && item.hasOwnProperty("value")) {
    content = item.value;
  }

  return content;
}
