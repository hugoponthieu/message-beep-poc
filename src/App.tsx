import { useAuth } from "react-oidc-context";
import { Button } from "./components/ui/button";
import { useEffect, useState } from "react";
import { Switch } from "./components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { cn } from "./lib/utils";
import { Outlet, useNavigate } from "react-router";
function App() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newMode);
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/channel");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <div className="flex flex-col bg-background h-screen">
      <div className="flex flex-row justify-start p-2 items-center w-full gap-6">
        <div className="flex flex-row items-center gap-2">
          <Moon />
          <Switch onClick={toggleDarkMode}></Switch>
          <Sun />
        </div>
        <Badge>
          <div
            className={cn("bg-red-400 size-4 rounded-full", {
              "bg-green-400": auth.isAuthenticated,
            })}
          ></div>{" "}
          {auth.user?.profile.name}
        </Badge>
        {auth.isAuthenticated ? (
          <Button onClick={() => auth.signoutRedirect()}>Signout</Button>
        ) : (
          <Button onClick={() => auth.signinRedirect()}>Signin</Button>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default App;
