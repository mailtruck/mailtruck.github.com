import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React! BOSHI!</p>;
        <AwesomeComponent />
      </div>)
  }
}

render(<App/>, document.getElementById('app'));
