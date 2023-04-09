import React from 'react';
import TopBar from "../../components/TopBar/TopBar.jsx";
import TodoView from "../../components/TodoView/TodoView.jsx";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <TopBar></TopBar>
      <TodoView></TodoView>
    </div>
  );
}

export default MainContent;