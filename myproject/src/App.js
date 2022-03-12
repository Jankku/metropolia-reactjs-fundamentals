import './App.css';
import React, { useState } from 'react';

function App(props) {
  return (
    <div className="App">
      Hello {props.firstname}
    </div>
  );
}

export default App;
