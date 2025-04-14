import { WebStorageStateStore } from "oidc-client-ts";
import App from "./App";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
  authority: "http://localhost:8080/realms/beep",
  client_id: "test-client",
  redirect_uri: "http://localhost:5173/",
  automaticSilentRenew: true,
  response_type: "code",
  scope: "openid profile email",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  onSigninCallback(user) {
    if(user){
      window.history.replaceState({}, "","/channel")
    } else {
      window.history.replaceState({}, "","/")
    }
  },
};

export default function Component() {
  return <AuthProvider {...oidcConfig} ><App /></AuthProvider>;
}
