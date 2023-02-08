import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./styles/Global.styled";
import { AuthProvider } from "react-auth-kit";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider
      authType="cookie"
      authName="token"
      cookieDomain={window.location.hostname}
      cookieSecure={false}
      cookieMaxAge={60 * 60 * 24 * 7}
    >
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
