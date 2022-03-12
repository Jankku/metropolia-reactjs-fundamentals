import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to="/">Home</Link>{' '}
        <Link to="/todolist">Todolist</Link>{' '}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/todolist" component={TodoList} />
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
