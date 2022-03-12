import React, { useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [query, setQuery] = useState("");

  const search = () => {
    fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(res => res.json())
    .then(resData => setRepos(resData.items));
  }

  const inputChanged = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <h1>Repositories</h1>
      <input placeholder="Query" onChange={inputChanged} />
      <button onClick={search}>Search</button>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Url</td>
          </tr>
        </thead>
        <tbody>
          {
            repos.map((repo, index) => {
              return <tr index={index}>
                <td>{repo.full_name}</td>
                <td><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.html_url}</a></td>
                </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
