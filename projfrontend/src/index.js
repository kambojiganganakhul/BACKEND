import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Auth0Provider
  domain="dev-wemgzrgwhh4uaey3.us.auth0.com"
  clientId="i2o0iHIvUfUL0p3hNcthZRsywxp2R8Sh"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
document.getElementById("root")
);

reportWebVitals();
