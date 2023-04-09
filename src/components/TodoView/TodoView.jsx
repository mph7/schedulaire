import React from 'react';
import TodoViewTopBar from "../TodoViewTopBar/TodoViewTopBar.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import './TodoView.css';

export const STATUS = {
  TODO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
};
const TodoView = () => {
  return (
    <div>
      <TodoViewTopBar></TodoViewTopBar>
      <div className="todo-view">
        <Tasks status={STATUS.TODO}></Tasks>
        <Tasks status={STATUS.IN_PROGRESS}></Tasks>
        <Tasks status={STATUS.DONE}></Tasks>
      </div>
    </div>
  );
};

export default TodoView;