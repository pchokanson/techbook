import React from 'react';
import { ItemNumber } from './Numberer';

export interface IndexItem {
  id: string;
  number: ItemNumber;
  title: string;
  type: string;
}

export class Indexer {
  index: Array<IndexItem>;
  setIndex: any;

  constructor(index: Array<IndexItem>, setIndex: any) {
    this.index = index;
    this.setIndex = setIndex;
  }

  registerItem(idx: IndexItem) {
    this.setIndex((oldIndex: Array<IndexItem>) => [...oldIndex, idx]);
  }
}
