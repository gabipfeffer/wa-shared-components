import React from "react";
import { isEmpty } from "ramda";

import Flags from "../flags";
import Table, { Header, Body } from "../table";
import s from "./MedalTable.pcss";

const HEADERS = [
  { value: "Rank" },
  { value: "Nat" },
  { value: "Country" },
  { value: "Gold" },
  { value: "Silver" },
  { value: "Bronze" },
  { value: "Total", hide: ["mobile"] },
];

export function MedalTable({ data }) {
  function transform(cols) {
    return cols.map((col) => {
      const key = `${col.id}-${col.countryCode}`;
      return {
        rowClickHandler: () =>
          handleModal({
            countryCode: col.countryCode,
            id: col.id,
            countryName: col.countryName,
          }),
        data: [
          { key: `${key}-medalRank`, value: col.medalRank },
          {
            key: `${key}-countryCode`,
            value: <Flags column flagName={col.countryCode} />,
          },
          { key: `${key}-countryName`, value: col.Country.CountryName },
          { key: `${key}-gold`, value: col.gold },
          { key: `${key}-silver`, value: col.silver },
          { key: `${key}-bronze`, value: col.bronze },
          { key: `${key}-total`, value: col.total, hide: ["mobile"] },
        ],
      };
    });
  }

  function rowClickHandler(e, _, onClick) {
    onClick();
  }

  if (isEmpty(data)) return null;
  
  return (
    <section style={{ marginBottom: 1 }}>
      <Table className={s.medalTable}>
        <Header rows={HEADERS} />
        <Body rows={transform(data)} rowClickHandler={rowClickHandler} />
      </Table>
    </section>
  );
}

export default MedalTable;
