import React, { useEffect, useState } from 'react';
import TodoViewTopBar from "../TodoViewTopBar/TodoViewTopBar.jsx";
import Tasks from "../Tasks/Tasks.jsx";
import './TodoView.css';
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export const STATUS = {
  TODO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
};

// TODO: project implementation
let projects = {
  project1: 'Default Project',
};

function TodoView() {
  const [ todos, setTodos ] = useState([]);
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) {
      const uniqueTodos = storedTodos.filter(storedTodo => !todos.some(todo => todo.id === storedTodo.id));
      setTodos((prevTodos) => [ ...prevTodos, ...uniqueTodos ]);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [ todos ]);
  
  function addNewTodo(todo) {
    console.log(todo);
    setTodos((prevTodos) => [ ...prevTodos, todo ]);
    console.log(todos);
  }
  
  return (
    <div>
      <TodoViewTopBar></TodoViewTopBar>
      <div className="todo-view">
        {Object.keys(STATUS).map((status) => {
          return <Tasks todos={todos} status={STATUS[status]} projects={projects} key={uuidv4()}
                        addNewTodo={addNewTodo}/>;
        })}
      </div>
    </div>
  );
}

export default TodoView;