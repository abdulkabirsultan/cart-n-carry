import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import './styles.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
