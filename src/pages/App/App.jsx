import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/auth"
            element={<AuthPage user={user} setUser={setUser} />}
          />
        </Routes>
      </>
    </main>
  );
}
