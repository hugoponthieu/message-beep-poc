import { useAuth, } from "react-oidc-context";
import { Button } from "./components/ui/button";
import { useEffect, useState } from "react";
import { Switch } from "./components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { Badge } from "./components/ui/badge";
import { cn } from "./lib/utils";
function App() {
  const auth = useAuth();
  
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set dark mode based on system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-row justify-center items-center w-full h-screen bg-background gap-6">
      <div className="flex flex-row items-center gap-2">
        <Sun />
        <Switch onClick={toggleDarkMode}></Switch>
        <Moon />
      </div>

      <Button onClick={() => auth.signinRedirect()}>Signin</Button>
      <Button onClick={() => auth.signoutRedirect()}>Signout</Button>
      


      <Badge>
        <div
          className={cn("bg-red-400 size-4 rounded-full", {
            "bg-green-400": auth.isAuthenticated,
          })}
        ></div>{" "}
        {auth.user?.profile.name}
      </Badge>
    </div>
  );
}

export default App;
