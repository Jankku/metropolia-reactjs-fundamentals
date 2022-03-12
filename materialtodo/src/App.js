import React, { useState } from 'react';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Save from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Tooltip } from '@material-ui/core';
import { AddTodo } from '../../firebasetodo/src/AddTodo';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: 100 }}>
        <Toolbar>
          <Typography variant="h6">Todolist</Typography>
        </Toolbar>
      </AppBar>
      <AddTodo />
      <TextField
        style={{ marginRight: 10 }}
        placeholder="Description"
        name="description"
        value={todo.description}
        onChange={inputChanged}
      />
      <TextField
        style={{ marginRight: 10 }}
        placeholder="Date"
        name="date"
        value={todo.date}
        onChange={inputChanged}
      />
      <Button variant="contained" color="primary" onClick={addTodo} startIcon={<Save />}>
        Add
      </Button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <Tooltip title="Delete todo" aria-label="Delete todo">
                  <IconButton size="small" color="secondary" onClick={() => deleteTodo(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
