import React, { Component } from 'react';

import { LoremIpsum } from 'lorem-ipsum';
import { Section, Book, Chapter, TableOfContents } from './reactComponentLib';

class App extends Component {
  render() {
    const lorem = new LoremIpsum({});
    return (
      <div>
        <Book title="Hello, World!">
          <TableOfContents />
          <Chapter title={lorem.generateWords(4)}>
            <p>{lorem.generateSentences(4)}</p>
            <p>{lorem.generateSentences(4)}</p>
          </Chapter>
          <Chapter title={lorem.generateWords(4)}>
            <p>{lorem.generateSentences(4)}</p>
            <p>{lorem.generateSentences(4)}</p>
            <Section title={lorem.generateWords(4)}>
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
            </Section>
          </Chapter>
        </Book>
      </div>
    );
  }
}

export default App;
