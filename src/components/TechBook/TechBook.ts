import React from 'react';

import { Indexer } from './Indexer';
import { Styler } from './Styler';
import { Numberer } from './Numberer';

export interface TechBookState {
  indexer: Indexer;
  styler: Styler;
  numberer: Numberer;
}

export const TechBookContext = React.createContext<TechBookState | null>(null);
