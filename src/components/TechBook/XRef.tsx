import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

export interface XRefProps {
  target: string;
}

/** Component to wrap a complete chapter of the technical document. */
function XRef(props: XRefProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: XRef outside of book</>;

  // Assign chapter number: on first call, then persists
  // const numberContainer = React.useRef<ItemNumber>(context.numberer.makeEquationNumber());

  // const id = props.id ? props.id : 'eq' + [numberContainer.current.equationNumber].join('-');

  const targetEntry = context.indexer.index.find(item => item.id == props.target);

  if (targetEntry) {
    // if(targetEntry.type == "volume")
    return <a href={'#' + targetEntry.id}>XRef to targetEntry.</a>;
  } else {
    return <>Bad XRef to {props.target}</>;
  }
}

export default XRef;
