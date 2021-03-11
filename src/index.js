import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import { TodoApp } from './components/08-useReducer/TodoApp';
import { MainApp } from './components/09-useContext/MainApp';
import reportWebVitals from './reportWebVitals';
// import "./components/08-useReducer/intro-reducer"

ReactDOM.render(
  <MainApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
