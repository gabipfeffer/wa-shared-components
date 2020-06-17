// @flow
import React from 'react';
import { isEmpty } from 'ramda';

import { sortLowHigh } from '../../helpers/sort-by-property';
import Table, { Header, Body } from '../table';
import SexBadge from '../Badges/SexBadge';
import MedalBadge from '../Badges/MedalBadge';

const HEADERS = ['Athlete', 'Sex', 'Discipline', 'Medal'];

export default function MedalTableDetails({ data, match, profileLink }) {
  function transform(cols) {
    const sortedCols = sortLowHigh(cols, 'typeId');
    return sortedCols.map((col) => {
      const key = `${col.id}`;
      const { competitorType, ...rest } = col;
  
      return {
        data: [
          {
            key: `${key}-${col.competitorId}`,
            value: {profileLink}
          },
          { key: `${key}-${col.sexCode}`, value: <SexBadge sex={col.sexCode} /> },
          { key: `${key}-${col.disciplineCode}`, value: col.disciplineName },
          { key: `${key}-${col.typeId}`, value: <MedalBadge medalType={col.typeId} /> }
        ]
      };
    });
  }

  if (isEmpty(data)) return null;

  return (
    <div>
      <Table>
        <Header rows={HEADERS} />
        <Body rows={transform(data)} />
      </Table>
    </div>
  );
}
