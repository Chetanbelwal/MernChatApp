import { Server } from "socket.io"; // Import Socket.IO for real-time communication
import http from "http"; // Import HTTP module to create a server
import express from "express"; // Import Express framework for handling HTTP routes

const app = express(); // Initialize Express app

const server = http.createServer(app); // Create an HTTP server using Express app


// Initialize Socket.IO server with CORS configuration
const io = new Server(server, {
  cors: {
    origin: [process.env.FRONTEND_URL], // Allow requests from this origin
    methods: ["GET", "POST"], // Allow only GET and POST HTTP methods
    credentials: true,
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {};

// Listen for new client connections
io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id); // Log connection with unique socket ID
  const userId = socket.handshake.query.userId; // Get user ID from query parameters
  if (userId !== undefined) {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));  //Object.keys will return an array of keys(which is user id's in our case)
  });

  // Add additional socket event handlers here (e.g., chat messages, notifications)
});

// Export the initialized Socket.IO server, HTTP server, and Express app
export { io, server, app };
