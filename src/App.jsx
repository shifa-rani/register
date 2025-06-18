import { useState } from "react";
import "./App.css";
import { Login } from "./component/jsx/login.jsx";
import { Register } from "./component/jsx/register.jsx";
import { LoginSecond } from "./component/jsx/Loginsecond.jsx";

function App() {
  const [showView, setShowView] = useState("login");
  return (
    <>
      {showView === "login" && <Login onClick={setShowView} />}
      {showView === "register" && <Register onClick={setShowView} />}
      {showView === "Loginsecond" && <LoginSecond onClick={setShowView} />}
  
    </>
  );
}

export default App;
