import React, { Component } from 'react';
import styled from 'styled-components';

import { Chapter } from './reactComponentLib';

class App extends Component {
  render() {
    return (
      <div>
        <Chapter title="Hello, world"> Test</Chapter>
      </div>
    );
  }
}

export default App;
