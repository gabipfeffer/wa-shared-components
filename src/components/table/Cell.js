// @flow
import React from "react";
import cs from "classnames";

import styles from "./Cell.pcss";

const getHideViews = (hide) =>
  Array.isArray(hide)
    ? hide.reduce((acc, item) => ({ ...acc, [item]: true }), {})
    : {};

function Cell({ tag, children, className, hide, ...rest }) {
  const { mobile, tablet, desktop } = getHideViews(hide);
  const cssStyles = cs(styles.cell, className, {
    [styles.mobile]: mobile,
    [styles.tablet]: tablet,
    [styles.desktop]: desktop,
  });
  return tag === "th" ? (
    <th className={cssStyles} {...rest}>
      {children}
    </th>
  ) : (
    <td className={cssStyles} {...rest}>
      {children}
    </td>
  );
}

Cell.defaultProps = {
  tag: "td",
  className: "",
};

export default Cell;
