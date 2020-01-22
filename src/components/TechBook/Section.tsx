import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

export interface SectionProps {
  title: string;
  children: React.ReactNode;

  id?: string;
}

/** Component to wrap a complete chapter of the technical document. */
function Section(props: SectionProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: chapter outside of book</>;

  // Assign chapter number: on first call, then persists
  const numberContainer = React.useRef<ItemNumber>(context.numberer.makeSectionNumber(props.title));

  const id = props.id
    ? props.id
    : '#ch' + [numberContainer.current.chapterNumber, numberContainer.current.sectionNumber].join('.');
  const style = context.styler.makeSectionStyle();

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'section',
    });
  }, []);

  return (
    <div style={style.bodyStyle}>
      <h1 id={id} style={style.titleStyle}>
        <span style={style.numberStyle}>
          {numberContainer.current.chapterNumber}.{numberContainer.current.sectionNumber} &nbsp;
        </span>
        {props.title}
        <a href="#toc">&uarr;</a>
      </h1>
      {props.children}
    </div>
  );
}

export default Section;
