import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FunctionComponent from './components/FunctionComponent'
import { Test } from './components/FunctionComponent2'
import ClassComponent from './components/ClassComponent'
import JSXComponent from './components/JSXComponent'
import PropComponent from './components/PropComponent'
import ClassPropComponent from './components/ClassPropComponent'
import StateComponent from './components/StateComponent'
import CounterComponent from './components/CounterCompoent'
import Events from './components/EventComponent';
import ParentComponent
 from './components/parent-child/ParentComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <FunctionComponent />
    <Test />
    <ClassComponent />
    <JSXComponent />
    <PropComponent  message='Hello' name='Prop Component' />
    <ClassPropComponent  message='Class Prop Component' />
    <StateComponent />
    <CounterComponent />
    <Events />
    <ParentComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
