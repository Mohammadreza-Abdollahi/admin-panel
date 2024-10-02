import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/content.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)