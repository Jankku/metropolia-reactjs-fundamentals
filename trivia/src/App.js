import React, { useState } from 'react';
import './App.css';

function App() {
  const [trivia, setTrivia] = useState({});

  const fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1')
    .then((res) => res.json())
    .then((resData) => {
      setTrivia(resData.results[0])
    })
    .catch((err) => console.error(err))
  }

  return (
    <div className="App">
      <p>{trivia.question}</p>
      <button onClick={fetchData}>New question</button>
    </div>
  );
}

export default App;
