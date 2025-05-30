import { WebStorageStateStore } from "oidc-client-ts";
import App from "./App";
import { AuthProvider, AuthProviderProps } from "react-oidc-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const oidcConfig: AuthProviderProps = {
  authority: import.meta.env.VITE_AUTHORITY_URL ,  // "http://localhost:8080/realms/beep",
  client_id: import.meta.env.VITE_CLIENT_ID, // "test-client",
  redirect_uri: import.meta.env.VITE_REDIRECT_URI, // "http://localhost:5173/",
  automaticSilentRenew: true,
  response_type: "code",
  scope: "openid profile email",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  onSigninCallback(user) {
    if (user) {
      window.history.replaceState({}, "", "/channel");
    } else {
      window.history.replaceState({}, "", "/");
    }
  },
};

const queryClient = new QueryClient();

export default function Component() {
  return (
    <AuthProvider {...oidcConfig}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AuthProvider>
  );
}
