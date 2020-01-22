import React from 'react';

import { Numberer, ItemNumber, DefaultNumberer } from './Numberer';
import { Styler, DefaultStyler, ItemStyle } from './Styler';
import { IndexItem } from './Indexer';
import { TechBookContext } from './TechBook';

interface TableOfContentsProps {
  title?: string;
}

function TableOfContents(props: TableOfContentsProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>Table of Contents outside of context.</>;

  const title: string = props.title ? props.title : 'Table of Contents';

  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {context.indexer.index.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ol>
    </div>
  );
}

export default TableOfContents;
