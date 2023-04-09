import React from 'react';
import './Tasks.css';
import Task from "../Task/Task.jsx";

const Tasks = ({ status }) => {
  return (
    <div className="tasks">
      <div className="tasks-top">
        <span className="status-label">{status} (4)</span>
        <div className="task-adder">
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
      <Task></Task>
    </div>
  );
};

export default Tasks;