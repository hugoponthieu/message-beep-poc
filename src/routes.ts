import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "./component.tsx",
    children: [
      {
        path: "channel",
        file: "./pages/Channel.tsx",
      },
    ],
  }
] satisfies RouteConfig;
