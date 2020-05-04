import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

export interface FigureProps {
  children?: React.ReactNode;
  id?: string;
  title: string;
  caption?: string;
}

function Figure(props: FigureProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: chapter outside of book</>;

  // Assign chapter number: on first call, then persists
  const numberContainer = React.useRef<ItemNumber>(context.numberer.makeFigureNumber(props.title));

  const id = props.id
    ? props.id
    : 'figure' +
      numberContainer.current.volumeNumber +
      '.' +
      numberContainer.current.chapterNumber +
      '-' +
      numberContainer.current.figureNumber;

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'figure',
    });
  }, []);

  return context.componentStyler.styledFigureComponent({
    number: numberContainer.current,
    title: props.title,
    caption: props.caption,
    children: props.children,
    id: id,
  });
}

export default Figure;
