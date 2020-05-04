import React from 'react';

import {
  ComponentStyler,
  StyledBookTitleProps,
  StyledChapterProps,
  StyledVolumeProps,
  StyledSectionProps,
  StyledFigureProps,
  StyledTableProps,
} from '../Styler';
import RawNumber from './RawNumber';

const colorScheme = ['#483c46', '#3c6e71', '#70ae6e', '#beee62', '#f4743b'];

export class BasicStyle implements ComponentStyler {
  styledBookTitleComponent = (props: StyledBookTitleProps) => <h1>{props.title}</h1>;

  styledVolumeComponent = (props: StyledVolumeProps) => (
    <div>
      <h1 id={props.id}>
        Volume <RawNumber {...props.number}></RawNumber> &nbsp;
        {props.title}
        <a href="#toc">&uarr;</a>
      </h1>
      {props.children}
    </div>
  );
  styledChapterComponent = (props: StyledChapterProps) => (
    <div>
      <h2 id={props.id}>
        Chapter <RawNumber {...props.number}></RawNumber> &nbsp;
        {props.title}
        <a href="#toc">&uarr;</a>
      </h2>
      {props.children}
    </div>
  );
  styledSectionComponent = (props: StyledSectionProps) => (
    <div>
      <h3 id={props.id}>
        Section <RawNumber {...props.number}></RawNumber> &nbsp;
        {props.title}
        <a href="#toc">&uarr;</a>
      </h3>
      {props.children}
    </div>
  );
  styledFigureComponent = (props: StyledFigureProps) => (
    <div
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colorScheme[0],
        borderRadius: '5mm',
        marginTop: '5mm',
      }}
    >
      <h4 id={props.id}>
        Figure <RawNumber {...props.number}></RawNumber> &nbsp;
        {props.title}
        <a href="#toc">&uarr;</a>
      </h4>
      {props.children}
    </div>
  );
  styledTableComponent = (props: StyledTableProps) => (
    <div
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: colorScheme[0],
        borderRadius: '5mm',
        marginTop: '5mm',
      }}
    >
      <h4 id={props.id}>
        Table <RawNumber {...props.number}></RawNumber> &nbsp;
        {props.title}
        <a href="#toc">&uarr;</a>
      </h4>
      {props.children}
      {props.caption && <div>{props.caption}</div>}
    </div>
  );
}

export default BasicStyle;
