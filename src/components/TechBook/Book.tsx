import React, { Component } from 'react';

import { Numberer } from './Numberer';
import { ComponentStyler } from './Styler';
import { Indexer } from './Indexer';
import { TechBookState, TechBookContext } from './TechBook';
import BasicStyle from './styles/BasicStyle';

export interface BookProps {
  title: string;
  children: React.ReactNode;
  styler?: ComponentStyler;
  indexer?: Indexer;
}

function Book(props: BookProps) {
  const [index, setIndex] = React.useState([]);

  const componentStyler: ComponentStyler = props.styler ? props.styler : new BasicStyle();

  return (
    <TechBookContext.Provider
      value={
        {
          indexer: props.indexer ? props.indexer : new Indexer(index, setIndex),
          componentStyler: componentStyler,
          numberer: new Numberer(),
        } as TechBookState
      }
    >
      <div>
        {componentStyler.styledBookTitleComponent({ title: props.title })}
        {props.children}
      </div>
    </TechBookContext.Provider>
  );
}

export default Book;
