import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts";
import { routes } from "./routes";

const oidcConfig: AuthProviderProps = {
  authority: "http://localhost:8080/realms/beep",
  client_id: "test-client",
  redirect_uri: "http://localhost:5173/",
  automaticSilentRenew: true,
  response_type: "code",
  scope: "openid profile email",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  stateStore: new WebStorageStateStore({ store: window.localStorage }),
};

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <RouterProvider router={routes} />
    </AuthProvider>
  </React.StrictMode>,
);
