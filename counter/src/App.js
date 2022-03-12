import './App.css';
import React from 'react';

function App(props) {
  return (
    <div className="App">
      {props.message.length > 10
      ? "Too long"
      : "Hello"
      }
    </div>
  );
}

export default App;
