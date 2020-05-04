import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

export interface ChapterProps {
  title: string;
  children: React.ReactNode;

  id?: string;
}

/** Component to wrap a complete chapter of the technical document. */
function Chapter(props: ChapterProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: chapter outside of book</>;

  // Assign chapter number: on first call, then persists
  const numberContainer = React.useRef<ItemNumber>(context.numberer.makeChapterNumber(props.title));

  const id = props.id ? props.id : 'ch' + numberContainer.current.chapterNumber;

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'chapter',
    });
  }, []);

  return context.componentStyler.styledChapterComponent({
    number: numberContainer.current,
    title: props.title,
    children: props.children,
    id: id,
  });
}

export default Chapter;
