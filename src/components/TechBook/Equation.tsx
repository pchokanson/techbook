import React from 'react';

import { ItemNumber } from './Numberer';
import { TechBookContext } from './TechBook';

export interface EquationProps {
  title?: string;
  children: React.ReactNode;

  id?: string;
}

/** Component to wrap a complete chapter of the technical document. */
function Equation(props: EquationProps) {
  const context = React.useContext(TechBookContext);

  if (!context) return <>ERROR: chapter outside of book</>;

  // Assign chapter number: on first call, then persists
  const numberContainer = React.useRef<ItemNumber>(context.numberer.makeEquationNumber());

  const id = props.id ? props.id : 'eq' + [numberContainer.current.equationNumber].join('-');

  // Register with index: run exactly once
  React.useEffect(() => {
    context.indexer.registerItem({
      id: id,
      number: numberContainer.current,
      title: 'equation',
      type: 'equation',
    });
  }, []);

  return context.componentStyler.styledEquationComponent({
    number: numberContainer.current,
    title: props.title,
    children: props.children,
    id: id,
  });
}

export default Equation;
