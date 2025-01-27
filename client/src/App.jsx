import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import { useEffect } from "react";
import { setSocket } from "./store/socketSlice";
import { setOnlineUsers } from "./store/userSlice";

function App() {
  const dispatch = useDispatch();
  const { authUser } = useSelector((store) => store.user);
  const { socket } = useSelector((store) => store.socket);
  const BASE_URL = process.env.REACT_APP_BASE_URL
  useEffect(() => {
    if (authUser) {
      const socketio = io(`${BASE_URL}`, {
        withCredentials: true,
        query: {
          userId: authUser._id,
        },
      });
      dispatch(setSocket(socketio));

      socketio?.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });
      return () => socketio.close();
    } else {
      if (socket) {
        socket.close();
        dispatch(setSocket(null));
      }
    }
  }, [authUser]);

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={authUser ? <HomePage /> : <Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
