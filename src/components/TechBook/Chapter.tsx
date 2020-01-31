import React from 'react';

import { ItemNumber } from './Numberer';
import RawNumber from './RawNumber';
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
  const style = context.styler.makeChapterStyle();

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'chapter',
    });
  }, []);

  return (
    <div style={style.bodyStyle}>
      <h1 id={id} style={style.titleStyle}>
        <span style={style.numberStyle}>
          <RawNumber {...numberContainer.current} /> &nbsp;
        </span>
        {props.title}
        <a href="#toc">&uarr;</a>
      </h1>
      {props.children}
    </div>
  );
}

export default Chapter;
