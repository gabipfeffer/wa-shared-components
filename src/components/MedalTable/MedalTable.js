import React, { useState, useCallback, useMemo } from "react";
import { isEmpty } from "ramda";

import Flags from "../flags";
import OpenModal from "../modal/OpenModal";
import Table, { Header, Body } from "../table";
import { useModal } from "react-modal-hook";
import s from "./MedalTable.pcss";
import {
  medalStyle,
  medalTitleStyle,
  goldMedalStyle,
  silverMedalStyle,
  bronzeMedalStyle,
  natStyle,
  titleStyle,
} from "./MedalStyles";
import MedalTableDetails from "../MedalTableDetails";

const HEADERS = [
  { value: "Rank", style: titleStyle },
  { value: "Nat", style: titleStyle },
  { value: "Country", style: titleStyle },
  { value: "Gold", style: medalTitleStyle },
  { value: "Silver", style: medalTitleStyle },
  { value: "Bronze", style: medalTitleStyle },
  { value: "Total", hide: ["mobile"], style: medalTitleStyle },
];

export function MedalTable({ data, match }) {
  const useModalWithData = (modalFactory) => {
    const [modalData, setModalData] = useState(undefined);
    const modalComponent = useMemo(() => modalFactory(modalData), [modalData]);
    const [_showModal, hideModal] = useModal(modalComponent, [modalData]);

    const showModal = useCallback((data) => {
      setModalData(data);
      _showModal();
    });

    return [showModal, hideModal];
  };

  const [showModal, hideModal] = useModalWithData(
    ({ id, countryName, flag } = {}) => () => (
      <OpenModal
        title={<Flags withTitle={countryName} flagName={flag} />}
        customWidth={500}
        hideModal={hideModal}
      >
        {match && (
          <Query query={GET_MEDALS_DETAILS} variables={{ medalTableId: id }}>
            {({ loading, error, data }) => {
              if (error) {
                console.error(error);
                return null;
              }
              const getMedalDetails = pathOr([], ["getMedalDetails"], data);

              if (isEmpty(getMedalDetails)) return null;
              return <MedalTableDetails data={getMedalDetails} match={match} />;
            }}
          </Query>
        )}
      </OpenModal>
    )
  );

  function handleModal({ countryName, id, countryCode }) {
    showModal({ id, countryName, flag: countryCode });
  }

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
          { key: `${key}-countryName`, value: col.countryName },
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
