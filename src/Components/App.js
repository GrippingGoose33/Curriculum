import React from 'react';
import {element} from 'prop-types';
import './App.css';
import Content from '../Shared/Layout/Content.js';
import Panel from '../Shared/Layout/Panel.js';

function App(props) {
  return (
    <div className="App">
      <Panel title="Routing" url="https://github.com/" />
      <Content>
        {props.children}
      </Content>
    </div>
  );
}

App.propTypes = {
  children: element.isRequired,
}
export default App;