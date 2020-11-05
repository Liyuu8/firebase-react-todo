import React, { createContext, useState } from 'react';

export const TodosContext = createContext();

// consumer component
const TodosContextProvider = (props) => {
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
    <TodosContext.Provider value={{ todos, addTodo, completeTodo, removeTodo }}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
