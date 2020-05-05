import React from 'react';

import { ItemNumber } from './Numberer';

/** Top-level book rendering interface */
export interface StyledBookProps {
  title: string;
  children: React.ReactNode;
}

/** Common styled rendering interface for un-numbered block components */
export interface StyledBlockProps {
  children: React.ReactNode;
}

/** Common styled rendering interface for numbered components */
export interface StyledDivisionProps extends StyledBlockProps {
  number: ItemNumber;
  title: string;
  id: string;
}

export type StyledVolumeProps = StyledDivisionProps;
export type StyledChapterProps = StyledDivisionProps;
export type StyledSectionProps = StyledDivisionProps;

export interface StyledComponentProps extends StyledBlockProps {
  number: ItemNumber;
  title?: string;
  caption?: string;
  id: string;
}

export type StyledFigureProps = StyledComponentProps;
export type StyledTableProps = StyledComponentProps;
export type StyledEquationProps = StyledComponentProps;

/** Component styler class: provides raw rendering components */
export interface ComponentStyler {
  styledBookComponent: React.FunctionComponent<StyledBookProps>;

  styledVolumeComponent: React.FunctionComponent<StyledVolumeProps>;
  styledChapterComponent: React.FunctionComponent<StyledChapterProps>;
  styledSectionComponent: React.FunctionComponent<StyledSectionProps>;

  styledFigureComponent: React.FunctionComponent<StyledFigureProps>;
  styledTableComponent: React.FunctionComponent<StyledTableProps>;
  styledEquationComponent: React.FunctionComponent<StyledEquationProps>;
}
