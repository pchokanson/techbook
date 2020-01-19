import React, { Component } from 'react';

import { LoremIpsum } from 'lorem-ipsum';
import { Chapter } from './reactComponentLib';

class App extends Component {
  render() {
    const lorem = new LoremIpsum({});
    return (
      <div>
        <Chapter title="Hello, world">
          <p>{lorem.generateWords(32)}</p>
          <p>{lorem.generateWords(32)}</p>
        </Chapter>
      </div>
    );
  }
}

export default App;
