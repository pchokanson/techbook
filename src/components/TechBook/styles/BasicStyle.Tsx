import React from 'react';

import {
  ComponentStyler,
  StyledBookProps,
  StyledChapterProps,
  StyledVolumeProps,
  StyledSectionProps,
  StyledFigureProps,
  StyledTableProps,
  StyledEquationProps,
} from '../Styler';
import RawNumber from './RawNumber';

const colorScheme = ['#483c46', '#3c6e71', '#70ae6e', '#beee62', '#f4743b'];

const pageStyleBase: React.CSSProperties = {
  paddingLeft: '5mm',
  paddingRight: '5mm',
};

const blockStyleBase: React.CSSProperties = {
  borderWidth: '0.5mm',
  borderStyle: 'solid',
  borderColor: colorScheme[0],
  borderRadius: '2mm',
  margin: '5mm',
  marginTop: '10mm',
  paddingLeft: '5mm',
  paddingRight: '5mm',
  paddingBottom: '5mm',
};

const blockTitleStyleBase: React.CSSProperties = {
  marginTop: '1mm',
  width: '100%',
};

export class BasicStyle implements ComponentStyler {
  styledBookComponent = (props: StyledBookProps) => (
    <div style={{ ...pageStyleBase }}>
      <h1 style={{ color: colorScheme[1] }}>{props.title}</h1>
      {props.children}
    </div>
  );

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
        ...blockStyleBase,
      }}
    >
      <h4 id={props.id} style={{ ...blockTitleStyleBase }}>
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
        ...blockStyleBase,
      }}
    >
      <h4 id={props.id} style={{ ...blockTitleStyleBase }}>
        Table <RawNumber {...props.number}></RawNumber> &nbsp;
        {props.title}
        <a href="#toc">&uarr;</a>
      </h4>
      {props.children}
      {props.caption && <div>{props.caption}</div>}
    </div>
  );
  styledEquationComponent = (props: StyledEquationProps) => (
    <div style={{ ...blockStyleBase }}>
      <h4 id={props.id} style={{ ...blockTitleStyleBase }}>
        Equation {props.number.equationNumber} &nbsp;
      </h4>
      {props.children}
    </div>
  );
}

export default BasicStyle;
