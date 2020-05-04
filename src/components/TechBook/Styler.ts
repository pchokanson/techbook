import React from 'react';

import { ItemNumber } from './Numberer';

export interface StyledComponentProps {
  number: ItemNumber;
  title: string;
  children: React.ReactNode;
  id: string;
}

export interface StyledBookTitleProps {
  title: string;
}

export type StyledVolumeProps = StyledComponentProps;
export type StyledChapterProps = StyledComponentProps;
export type StyledSectionProps = StyledComponentProps;
export interface StyledFigureProps extends StyledComponentProps {
  caption?: string;
}
export interface StyledTableProps extends StyledComponentProps {
  caption?: string;
}

/** Component styler class: provides raw rendering components */
export interface ComponentStyler {
  styledBookTitleComponent: React.FunctionComponent<StyledBookTitleProps>;

  styledVolumeComponent: React.FunctionComponent<StyledVolumeProps>;
  styledChapterComponent: React.FunctionComponent<StyledChapterProps>;
  styledSectionComponent: React.FunctionComponent<StyledSectionProps>;

  styledFigureComponent: React.FunctionComponent<StyledFigureProps>;
  styledTableComponent: React.FunctionComponent<StyledTableProps>;
}
