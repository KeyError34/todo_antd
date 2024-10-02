import { addTodo } from '../../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Form as AntForm, Input, Button, notification } from 'antd';

function TodoForm() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  
  function openNotification() {
     notification.success({
       message: 'Todo Added',
       description: 'Your new task has been added successfully!',
       placement: 'topRight',
     });
  }

  function onSubmit ()  {
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue));
      setInputValue('');
       openNotification();
    }
  };

  function onInput ( e) {
    setInputValue(e.target.value);
  };


  return (
    <AntForm onFinish={onSubmit} layout="inline">
      <AntForm.Item>
        <Input
          value={inputValue}
          onChange={onInput}
          placeholder="Add a new task"
        />
      </AntForm.Item>
      <AntForm.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </AntForm.Item>
    </AntForm>
  );
}
export default TodoForm;
