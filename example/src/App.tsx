import React, { Component } from 'react';

import { LoremIpsum } from 'lorem-ipsum';
import { Book, Chapter, TableOfContents } from './reactComponentLib';

class App extends Component {
  render() {
    const lorem = new LoremIpsum({});
    return (
      <div>
        <Book title="Hello, World!">
          <TableOfContents />
          <Chapter title={lorem.generateWords(4)}>
            <p>{lorem.generateWords(32)}</p>
            <p>{lorem.generateWords(32)}</p>
          </Chapter>
          <Chapter title={lorem.generateWords(4)}>
            <p>{lorem.generateWords(32)}</p>
            <p>{lorem.generateWords(32)}</p>
          </Chapter>
          <Chapter title={lorem.generateWords(4)}>
            <p>{lorem.generateWords(32)}</p>
            <p>{lorem.generateWords(32)}</p>
          </Chapter>
        </Book>
      </div>
    );
  }
}

export default App;
