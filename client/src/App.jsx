import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(null);
  const { authUser } = useSelector((store) => store.user);
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000", {
        withCredentials: true,
      });
      setSocket(socket);
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
