import React, { Component } from 'react';

import { LoremIpsum } from 'lorem-ipsum';
import { Volume, Section, Book, Chapter, Figure, TableOfContents, Table } from './reactComponentLib';

class App extends Component {
  render() {
    const lorem = new LoremIpsum({});
    return (
      <div>
        <Book title="Hello, World!">
          <TableOfContents />
          <Volume title={lorem.generateWords(8)}>
            <Chapter title={lorem.generateWords(4)}>
              <p>{lorem.generateSentences(4)}</p>
              <p>{lorem.generateSentences(4)}</p>
              <Figure title={lorem.generateWords(4)}>{lorem.generateSentences(5)}</Figure>
              <Table title={lorem.generateWords(4)}></Table>
            </Chapter>
            <Chapter title={lorem.generateWords(4)}>
              <p>{lorem.generateSentences(4)}</p>
              <p>{lorem.generateSentences(4)}</p>
              <Section title={lorem.generateWords(4)}>
                <Figure title={lorem.generateWords(4)}></Figure>
                <Table title={lorem.generateWords(4)}></Table>
                <Figure title={lorem.generateWords(4)}></Figure>
                <Table title={lorem.generateWords(4)}></Table>
                <p>{lorem.generateSentences(4)}</p>
              </Section>
              <Section title={lorem.generateWords(4)}>
                <p>{lorem.generateSentences(4)}</p>
              </Section>
            </Chapter>
            <Chapter title={lorem.generateWords(4)}>
              <p>{lorem.generateSentences(4)}</p>
              <p>{lorem.generateSentences(4)}</p>
              <Section title={lorem.generateWords(4)}>
                <p>{lorem.generateSentences(4)}</p>
                <p>{lorem.generateSentences(4)}</p>
                <p>{lorem.generateSentences(4)}</p>
              </Section>
              <Section title={lorem.generateWords(4)}>
                <p>{lorem.generateSentences(4)}</p>
                <p>{lorem.generateSentences(4)}</p>
                <p>{lorem.generateSentences(4)}</p>
              </Section>
            </Chapter>
          </Volume>
        </Book>
      </div>
    );
  }
}

export default App;
