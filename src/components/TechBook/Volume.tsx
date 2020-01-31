import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';
import RawNumber from './RawNumber';

export interface VolumeProps {
  title: string;
  children: React.ReactNode;

  id?: string;
}

/** Component to wrap a complete chapter of the technical document. */
function Volume(props: VolumeProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: Volume outside of book</>;

  // Assign Volume number: on first call, then persists
  const numberContainer = React.useRef<ItemNumber>(context.numberer.makeVolumeNumber(props.title));

  const id = props.id ? props.id : 'vol' + numberContainer.current.volumeNumber;
  const style = context.styler.makeVolumeStyle();

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'volume',
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

export default Volume;
