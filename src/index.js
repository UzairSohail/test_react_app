import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const tmp = 1098;

const root = ReactDOM.createRoot(document.getElementById('root'));

function testFunc() {
  return "success";
}

const fname = "Uzair";
const lname = "Sohail";

root.render(
  <div>
    <h1>Hello {fname + " " + lname}</h1>
    <h2>Hello again but smaller {testFunc()}</h2>
    {/*this is a comment*/}
    {/* // <React.StrictMode>
  //   <App />
  // </React.StrictMode> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
