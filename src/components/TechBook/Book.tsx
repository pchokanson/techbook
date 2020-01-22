import React from 'react';

import { Numberer } from './Numberer';
import { DefaultStyler } from './Styler';
import { Indexer } from './Indexer';
import { TechBookState, TechBookContext } from './TechBook';

export interface BookProps {
  title: string;
  children: React.ReactNode;

  indexer?: Indexer;
}

function Book(props: BookProps) {
  const [index, setIndex] = React.useState([]);
  return (
    <TechBookContext.Provider
      value={
        {
          indexer: props.indexer ? props.indexer : new Indexer(index, setIndex),
          styler: DefaultStyler,
          numberer: new Numberer(),
        } as TechBookState
      }
    >
      <div>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </TechBookContext.Provider>
  );
}

export default Book;
