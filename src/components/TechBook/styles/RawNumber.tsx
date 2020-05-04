import React from 'react';

import { ItemNumber } from '../Numberer';

function RawNumber(props: ItemNumber) {
  if (props.figureNumber != 0) {
    return (
      <>
        {props.chapterNumber}-{props.figureNumber}
      </>
    );
  }
  return (
    <>
      {props.volumeNumber != 0 && props.volumeNumber + '.'}
      {props.chapterNumber != 0 && props.chapterNumber + '.'}
      {props.sectionNumber != 0 && props.sectionNumber + '.'}
      {props.subsectionNumber != 0 && props.subsectionNumber + '.'}
    </>
  );
}

export default RawNumber;
