import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

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

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: props.title,
      type: 'volume',
    });
  }, []);

  return context.componentStyler.styledVolumeComponent({
    number: numberContainer.current,
    title: props.title,
    children: props.children,
    id: id,
  });
}

export default Volume;
