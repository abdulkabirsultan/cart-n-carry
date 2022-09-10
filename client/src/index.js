import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import './styles.css';
import { Provider } from 'react-redux';
const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
