import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import './index.css';
import App from './pages/Chat';
import Setting from './pages/Setting';
import reportWebVitals from './reportWebVitals';


import 'antd/dist/antd.css';

ReactDOM.render(
  // <React.StrictMode>
    // <App />
    <Router>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/setting">
        <Setting />
      </Route>
    </Router>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
