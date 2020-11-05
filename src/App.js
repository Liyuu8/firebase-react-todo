import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Table,
} from 'reactstrap';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: inputValue, isCompleted: false }]);
    setInputValue('');
  };
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
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">
                追加
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            {todos &&
              todos.map((todo, index) => (
                <tr key={index}>
                  <th className="text-left">
                    {todo.isCompleted ? <del>{todo.title}</del> : todo.title}
                  </th>
                  <td className="text-right">
                    <Button
                      color={todo.isCompleted ? 'secondary' : 'success'}
                      className="mr-2"
                      onClick={() => completeTodo(index)}
                    >
                      完了
                    </Button>

                    <Button color="danger" onClick={() => removeTodo(index)}>
                      削除
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
