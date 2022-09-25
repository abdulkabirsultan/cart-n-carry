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
      domain='dev-l2kxd6i5.us.auth0.com'
      clientId='4EHgQTjfPpFjkbkecxoiWBIRRfVuPeES'
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
