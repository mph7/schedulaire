import React from 'react';
import "./Task.css";

function calculateWidth(taskActual, taskTotal) {
  return `${taskActual / taskTotal * 100}%`;
}

function calculateHueRotate(taskActual, taskTotal) {
  return `hue-rotate(${taskActual / taskTotal * 100}deg)`;
}

const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December' ];

function formatDate(match, p1, p2, p3) {
  const newDate = new Date(match);
  const monthName = monthNames[newDate.getMonth()];
  return `${p3} ${monthName} ${p1}`;
}

function Task({ taskName, project, dueDate }) {
  return (
    <div className="task-card">
      <div className="task-top">
        <div>
          <p className="task-title">{taskName}</p>
          <p className="task-project">{project}</p>
        </div>
        <button className="more-options-button">
          <svg width="2" height="2" viewBox="0 0 2 2" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" fill="white"/>
          </svg>
          <svg width="2" height="2" viewBox="0 0 2 2" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" fill="white"/>
          </svg>
          <svg width="2" height="2" viewBox="0 0 2 2" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" fill="white"/>
          </svg>
        </button>
      </div>
      <div className="progress">
        <div className="progress-top">
          <div className="progress-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path
                  d="M2.66666 4.66667C2.66666 4.29848 2.96513 4 3.33332 4H3.99999C4.36818 4 4.66666 4.29848 4.66666 4.66667C4.66666 5.03486 4.36818 5.33333 3.99999 5.33333H3.33332C2.96513 5.33333 2.66666 5.03486 2.66666 4.66667ZM5.99999 4.66667C5.99999 4.29848 6.29847 4 6.66666 4H12.6667C13.0348 4 13.3333 4.29848 13.3333 4.66667C13.3333 5.03486 13.0348 5.33333 12.6667 5.33333H6.66666C6.29847 5.33333 5.99999 5.03486 5.99999 4.66667ZM2.66666 8C2.66666 7.63181 2.96513 7.33333 3.33332 7.33333H3.99999C4.36818 7.33333 4.66666 7.63181 4.66666 8C4.66666 8.36819 4.36818 8.66667 3.99999 8.66667H3.33332C2.96513 8.66667 2.66666 8.36819 2.66666 8ZM5.99999 8C5.99999 7.63181 6.29847 7.33333 6.66666 7.33333H12.6667C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6667 8.66667H6.66666C6.29847 8.66667 5.99999 8.36819 5.99999 8ZM2.66666 11.3333C2.66666 10.9651 2.96513 10.6667 3.33332 10.6667H3.99999C4.36818 10.6667 4.66666 10.9651 4.66666 11.3333C4.66666 11.7015 4.36818 12 3.99999 12H3.33332C2.96513 12 2.66666 11.7015 2.66666 11.3333ZM5.99999 11.3333C5.99999 10.9651 6.29847 10.6667 6.66666 10.6667H12.6667C13.0348 10.6667 13.3333 10.9651 13.3333 11.3333C13.3333 11.7015 13.0348 12 12.6667 12H6.66666C6.29847 12 5.99999 11.7015 5.99999 11.3333Z"
                  fill="white"/>
              </g>
            </svg>
            <span>Progress</span>
          </div>
          <span className="progress-indicator">7/10</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-background"></div>
          <div className="actual-progress-bar" style={{
            width: calculateWidth(7, 10),
            filter: calculateHueRotate(7, 10),
          }}></div>
        </div>
      </div>
      <div>
        <span
          className="task-date">{dueDate.replace(/^(\d{4})-(\d{2})-(\d{2})/, formatDate)}</span>
      </div>
    </div>
  );
}

export default Task;