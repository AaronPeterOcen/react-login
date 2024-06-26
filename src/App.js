import { useState } from "react";
import "./App.css";
import Home from "./home";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                email={email}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
