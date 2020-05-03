import React from 'react';

export interface ItemStyle {
  numberStyle: React.CSSProperties;
  titleStyle: React.CSSProperties;
  bodyStyle: React.CSSProperties;
}

const colorScheme = ['#483c46', '#3c6e71', '#70ae6e', '#beee62', '#f4743b'];

// TODO: Make the Styler class return raw React components, which should give
// more flexibility.  These can get props that are passed by the internal types
// like the number and so forth.

export class Styler {
  makeChapterStyle(): ItemStyle {
    return {
      numberStyle: {} as React.CSSProperties,
      titleStyle: {
        color: colorScheme[1],
      } as React.CSSProperties,
      bodyStyle: {} as React.CSSProperties,
    };
  }
  makeSectionStyle(): ItemStyle {
    return {
      numberStyle: {} as React.CSSProperties,
      titleStyle: {
        color: colorScheme[2],
        fontSize: 14,
      } as React.CSSProperties,
      bodyStyle: {} as React.CSSProperties,
    };
  }
  makeVolumeStyle(): ItemStyle {
    return {
      numberStyle: {} as React.CSSProperties,
      titleStyle: {
        color: colorScheme[0],
      } as React.CSSProperties,
      bodyStyle: {} as React.CSSProperties,
    };
  }
  makeFigureStyle(): ItemStyle {
    return {
      numberStyle: {} as React.CSSProperties,
      titleStyle: {
        color: colorScheme[0],
      } as React.CSSProperties,
      bodyStyle: {
        border: '1px solid black',
      } as React.CSSProperties,
    };
  }
  makeTableStyle(): ItemStyle {
    return {
      numberStyle: {} as React.CSSProperties,
      titleStyle: {
        color: colorScheme[0],
      } as React.CSSProperties,
      bodyStyle: {
        border: '1px solid black',
      } as React.CSSProperties,
    };
  }
}

export const DefaultStyler: Styler = new Styler();
