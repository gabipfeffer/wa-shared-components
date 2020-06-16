import React, { useCallback, isValidElement, useState } from "react";
import cs from "classnames";

import noop from "../../utils/noop";

import CloseIcon from "../icons/XIcon";

import s from "./MobileCollapsibleRow.pcss";
import Row from "./Row";

function MobileCollapsibleRow({ row, rowClickHandler, isMobile, className }) {
  const [isShowing, setIsShowing] = useState(false);
  const hasRowLink = !!rowClickHandler && !isMobile;
  const handleRowLink = useCallback(
    (e) => {
      hasRowLink ? rowClickHandler(e, row.linkUrl, row.rowClickHandler) : noop;
      setIsShowing(!isShowing);
    },
    [isShowing]
  );

  return (
    <>
      <Row
        row={row}
        rowClickHandler={handleRowLink}
        isMobile={isMobile}
        className={className}
      />

      {row.mobileCollapsibleContent && isMobile && isShowing && (
        <tr>
          <td colSpan={row.data.length}>
            <div className={s.collapseContainer}>
              <button
                className={s.closeBtn}
                onClick={() => setIsShowing(false)}
              >
                <CloseIcon />
              </button>
              {row.mobileCollapsibleContent}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default MobileCollapsibleRow;
