import React from 'react';

import { IndexItem } from './Indexer';
import { TechBookContext } from './TechBook';

interface TableOfContentsProps {
  title?: string;
}

interface TOCEntryProps {
  item: IndexItem;
}

function TOCEntry(props: TOCEntryProps) {
  if (props.item.type == 'chapter') {
    return (
      <a href={'#' + props.item.id}>
        {props.item.number.chapterNumber}.&nbsp; {props.item.title}
      </a>
    );
  } else if (props.item.type == 'section') {
    return (
      <a href={'#' + props.item.id}>
        {props.item.number.chapterNumber}.{props.item.number.sectionNumber}&nbsp;
        {props.item.title}
      </a>
    );
  } else {
    return <>{props.item.title}</>;
  }
}

function TableOfContents(props: TableOfContentsProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>Table of Contents outside of context.</>;

  const title: string = props.title ? props.title : 'Table of Contents';

  return (
    <div>
      <h1>{title}</h1>
      <ol style={{ listStyleType: 'none' } as React.CSSProperties}>
        {context.indexer.index.map(item => {
          return (
            <li key={item.id}>
              <TOCEntry item={item} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default TableOfContents;
