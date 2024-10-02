import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../redux/slices/todoSlice';
import { List, Button, Modal } from 'antd';
import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  function showModal() {
    setIsModal(true);
  }
  function isOk() {
    dispatch(deleteTodo(todo.id));
    setIsModal(false);
  }
  function Cancel() {
    setIsModal(false);
  }
  return (
    <>
      <List.Item
        actions={[
          <Button
            type={todo.completed ? 'dashed' : 'primary'}
            icon={<CheckCircleOutlined />}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.completed ? 'Undone' : 'Done'}
          </Button>,
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={showModal}
          >
            Delete
          </Button>,
        ]}
      >
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </span>
      </List.Item>
      <Modal
        title="Confirm Delete"
        open={isModal}
        onOk={isOk}
        onCancel={Cancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to delete this task?</p>
      </Modal>
    </>
  );
}

export default TodoItem;
