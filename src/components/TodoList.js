import React, { useContext } from 'react';
import { Button, Table } from 'reactstrap';
import { TodosContext } from '../contexts/TodosContext';

const TodoList = () => {
  const { todos, completeTodo, removeTodo } = useContext(TodosContext);

  return (
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
  );
};

export default TodoList;
