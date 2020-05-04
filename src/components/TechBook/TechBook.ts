import React from 'react';

import { Indexer } from './Indexer';
import { ComponentStyler } from './Styler';
import { Numberer } from './Numberer';

export interface TechBookState {
  indexer: Indexer;
  componentStyler: ComponentStyler;
  numberer: Numberer;
}

export const TechBookContext = React.createContext<TechBookState | null>(null);
