import React, { useState } from 'react';
import './Tasks.css';
import Task from "../Task/Task.jsx";
import Modal from "../Modal/Modal.jsx";
import { STATUS } from "../TodoView/TodoView.jsx";
import { v4 as uuidv4 } from "uuid";


function Tasks({ todos, status, projects, addNewTodo }) {
  const [ showModal, setShowModal ] = useState(false);
  
  const [ taskName, setTaskName ] = useState('');
  const [ taskProject, setTaskProject ] = useState('project1');
  const [ taskStatus, setTaskStatus ] = useState(status);
  const [ taskStartDate, setTaskStartDate ] = useState('');
  const [ taskDueDate, setTaskDueDate ] = useState('');
  
  function onTaskNameChange(event) {
    setTaskName(event.target.value);
  }
  
  function onTaskProjectChange(event) {
    setTaskProject(event.target.value);
  }
  
  function onTaskStatusChange(event) {
    setTaskStatus(event.target.value);
  }
  
  function onTaskStartDateChange(event) {
    setTaskStartDate(event.target.value);
  }
  
  function onTaskDueDateChange(event) {
    setTaskDueDate(event.target.value);
  }
  
  function clearTodoStates() {
    setTaskName('');
    setTaskProject('project1');
    setTaskStatus(status);
    setTaskStartDate('');
    setTaskDueDate('');
  }
  
  function handleSaveClick() {
    addNewTodo({
      id: uuidv4(),
      name: taskName,
      project: taskProject,
      status: taskStatus,
      startDate: taskStartDate,
      dueDate: taskDueDate,
    });
    setShowModal(false);
    clearTodoStates();
  }
  
  function handleCancelClick() {
    setShowModal(false);
    clearTodoStates();
  }
  
  
  return (
    <div className="tasks">
      {showModal && (
        <Modal showModal={showModal}
               handleCancelClick={handleCancelClick}
               content={<form className="add-task-form">
                 <label htmlFor="task-name" className="task-name-label">
                   Task Name: <input type="text" placeholder="Enter task name" className="task-name-input"
                                     value={taskName} onChange={onTaskNameChange}/>
                 </label>
                 <label htmlFor="project-select">
                   Project:
                   <select name="project-select" id="project-select" onChange={onTaskProjectChange}>
                     {Object.keys(projects).map((project) => (
                       <option value={project} key={uuidv4()}>{projects[project]}</option>
                     ))}
                   </select>
                 </label>
                 <label htmlFor="status-select"> Status:
                   <select name="status-select" id="status-select" onChange={onTaskStatusChange} value={taskStatus}>
                     {Object.keys(STATUS).map((optionStatus) => (
                       <option value={STATUS[optionStatus]} id={STATUS[optionStatus]}
                               key={uuidv4()}>{STATUS[optionStatus]}</option> ))}
                   </select>
                 </label>
                 <div className="dates-form">
                   <label htmlFor="start-date-input">Start Date:
                     <input type="date" name="start-date-input" id="start-date-input" value={taskStartDate}
                            onChange={onTaskStartDateChange}/>
                   </label>
                   <label htmlFor="due-date-input">Due Date:
                     <input type="date" name="due-date-input" id="due-date-input" value={taskDueDate}
                            onChange={onTaskDueDateChange}/>
                   </label>
                 </div>
                 <div className="buttons">
                   <button type="button" className="save-button" onClick={handleSaveClick}>Save</button>
                   <button type="button" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                 </div>
               </form>}>
        </Modal> )}
      <div className="tasks-top">
        <span className="status-label">{status} ({todos.filter((todo) => todo.status === status).length})</span>
        <div className="task-adder" onClick={() => setShowModal(true)}>
          <button className="plus-symbol">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path d="M7 4H1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 7L4 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </g>
            </svg>
          </button>
          <span className="new-task-label">Add new task</span>
        </div>
      </div>
      <div className="task-list">
        {todos.filter((x) => x.status === status).map((todo) => (
          <Task key={todo.id}
                taskName={todo.name}
                project={todo.project}
                dueDate={todo.dueDate}/> ))}
      </div>
    </div>
  );
}

export default Tasks;