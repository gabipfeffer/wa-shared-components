import React from "react";
import { isEmpty } from "ramda";

import Flags from "../flags";
import Table, { Header, Body } from "../table";
import s from "./MedalTable.pcss";
import {
  medalStyle,
  medalTitleStyle,
  goldMedalStyle,
  silverMedalStyle,
  bronzeMedalStyle,
  natStyle,
} from "./MedalStyles";

const HEADERS = [
  { value: "Rank" },
  { value: "Nat" },
  { value: "Country" },
  { value: "Gold", style: medalTitleStyle },
  { value: "Silver", style: medalTitleStyle },
  { value: "Bronze", style: medalTitleStyle },
  { value: "Total", hide: ["mobile"], style: medalTitleStyle },
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
            value: <Flags flagName={col.countryCode} />,
            style: natStyle,
          },
          { key: `${key}-countryName`, value: col.Country.CountryName },
          {
            key: `${key}-gold`,
            value: col.gold,
            style: goldMedalStyle,
          },
          { key: `${key}-silver`, value: col.silver, style: silverMedalStyle },
          { key: `${key}-bronze`, value: col.bronze, style: bronzeMedalStyle },
          {
            key: `${key}-total`,
            value: col.total,
            hide: ["mobile"],
            style: medalStyle,
          },
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
      <Table className={s.medalTable} theme={"medalTable"}>
        <Header rows={HEADERS} />
        <Body rows={transform(data)} rowClickHandler={rowClickHandler} />
      </Table>
    </section>
  );
}

export default MedalTable;
