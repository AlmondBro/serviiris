//Import required React modules
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';

const webAppName  = "serviiris-web-app";
const rootNode    = document.getElementById(webAppName);

//Wrap the App in the BrowserRouter to use react-router
const BrowserRouterApp = (props) => {
  return (
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  ); //end return statement
}; //end BrowserRouterApp

ReactDOM.render(
  <BrowserRouterApp/>,
  rootNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
