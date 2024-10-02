import TodoItem from '../todoItem';
import { useSelector } from 'react-redux';
import { List as AntList } from 'antd';

function TodoList() {
  const todos = useSelector(state => state.todos.items);

  return (
    <AntList
      bordered
      dataSource={todos}
      renderItem={todo => <TodoItem key={todo.id} todo={todo} />}
    />
  );
}

export default TodoList;
