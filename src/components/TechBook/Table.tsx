import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

export interface TableProps {
  children?: React.ReactNode;
  id?: string;
  title: string;
  caption?: string;
}

function Table(props: TableProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: chapter outside of book</>;

  // Assign chapter number: on first call, then persists
  const numberContainer = React.useRef<ItemNumber>(context.numberer.makeTableNumber(props.title));

  const id = props.id
    ? props.id
    : 'tab' +
      numberContainer.current.volumeNumber +
      '.' +
      numberContainer.current.chapterNumber +
      '-' +
      numberContainer.current.tableNumber;

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'table',
    });
  }, []);

  return context.componentStyler.styledTableComponent({
    number: numberContainer.current,
    title: props.title,
    caption: props.caption,
    children: props.children,
    id: id,
  });
}

export default Table;
