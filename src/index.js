import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "./index.scss"

import App from './App';

const root = document.querySelector("#root");
const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(app, root, () => {
  console.log("App rendered to DOM");
});
