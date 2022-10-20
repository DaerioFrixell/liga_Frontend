import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

