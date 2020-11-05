import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (inputValue) =>
    setTodos([...todos, { title: inputValue, isCompleted: false }]);
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </Container>
    </div>
  );
}

export default App;
