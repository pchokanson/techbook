import React from 'react';

import { IndexItem } from './Indexer';
import { TechBookContext } from './TechBook';
import RawNumber from './RawNumber';

interface TableOfContentsProps {
  title?: string;
}

interface TOCEntryProps {
  item: IndexItem;
}

function TOCEntry(props: TOCEntryProps) {
  if (['volume', 'chapter', 'section', 'subsection'].includes(props.item.type)) {
    return (
      <a href={'#' + props.item.id}>
        <RawNumber {...props.item.number} />
        &nbsp; {props.item.title}
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

  const filteredIndex = context.indexer.index.filter(
    item => item.type == 'volume' || item.type == 'chapter' || item.type == 'section',
  );
  const sortedIndex = filteredIndex.sort(
    (a, b) =>
      a.number.volumeNumber * 10000 +
      a.number.chapterNumber * 100 +
      a.number.sectionNumber -
      b.number.volumeNumber * 10000 -
      b.number.chapterNumber * 100 -
      b.number.sectionNumber,
  );

  return (
    <div>
      <h1>{title}</h1>
      <ol style={{ listStyleType: 'none' } as React.CSSProperties}>
        {sortedIndex.map(item => {
          return (
            <li key={item.id}>
              <TOCEntry item={item} />
            </li>
          );
        })}
      </ol>
    </div>
  );
  // <div>{JSON.stringify(sortedIndex)}</div>
}

export default TableOfContents;
