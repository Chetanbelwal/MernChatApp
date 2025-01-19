import { Server } from "socket.io"; // Import Socket.IO for real-time communication
import http from "http"; // Import HTTP module to create a server
import express from "express"; // Import Express framework for handling HTTP routes

const app = express(); // Initialize Express app

const server = http.createServer(app); // Create an HTTP server using Express app

// Initialize Socket.IO server with CORS configuration
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST"], // Allow only GET and POST HTTP methods
  },
});

// Listen for new client connections
io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id); // Log connection with unique socket ID

//   // Listen for socket disconnection
//   socket.on("disconnect", () => {
//     console.log(`User with socket ID ${socket.id} disconnected`); // Log when a user disconnects
//   });

  // Add additional socket event handlers here (e.g., chat messages, notifications)
});

// Export the initialized Socket.IO server, HTTP server, and Express app
export { io, server, app };
