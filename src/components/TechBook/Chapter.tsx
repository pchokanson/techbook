import React from 'react';

import { Numberer, ItemNumber, DefaultNumberer } from './Numberer';

export interface ChapterProps {
  children?: React.ReactNode;
  id?: string;
  numberer?: Numberer;
  title: string;
}

/** Component to wrap a complete chapter of the technical document. */
function Chapter(props: ChapterProps) {
  // Assign chapter number: on first call, then persists
  const numberer: Numberer = props.numberer ? props.numberer : DefaultNumberer;
  const numberContainer = React.useRef<ItemNumber>(numberer.makeChapterNumber(props.title));

  return (
    <div id={numberContainer.current.id}>
      <h1 id={props.id}>
        <span>{numberContainer.current.id && numberContainer.current.chapterNumber}. &nbsp;</span>
        {props.title}
        <a href="#toc">&uarr;</a>
      </h1>
      {props.children}
    </div>
  );
}

export default Chapter;
