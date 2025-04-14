import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";
import { createBrowserRouter } from "react-router";
import App from "./App";

export default [
  // * matches all URLs, the ? makes it optional so it will match / as well
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App
  }
])