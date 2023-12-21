import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "./redux/store"

import axios from 'axios';
axios.defaults.baseURL=`http://localhost:3001/`;

// axios.defaults.baseURL = `https://drivers-app-production.up.railway.app/`;



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );