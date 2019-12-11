import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = document.querySelector("#root");
const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
)

ReactDOM.render(app, root);
