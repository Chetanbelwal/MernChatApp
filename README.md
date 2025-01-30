
# Real Time ChatApp

## Introduction
Realtime Chat App is a modern, feature-rich chat application that allows users to register, log in, and chat with other registered users in real time. Built using the MERN stack (MongoDB, Express.js, React, and Node.js) and Socket.io, this app provides seamless real-time communication with online status indicators. 🚀

## Content
- [Technology Stack](#technology-stack)
- [Project Type](#project-type)
- [Deployed App](#deployed-app)
- [Directory Structure](#directory-structure)
- [Video/Photo Walkthrough of the project](#video-walkthrough-of-the-project)
- [Features](#features)
- [Installation & Getting started](#installation--getting-started)
- [Environment Variables](#environment-variables)
## Technology Stack
- React: A JavaScript library for building user interfaces.

- Tailwind CSS: A utility-first CSS framework for rapid UI development.

- Daisy UI: A component library based on Tailwind CSS.

- Node.js: A JavaScript runtime for building server-side applications.

- Express.js: A web application framework for Node.js, used for building RESTful APIs.

- MongoDB: A NoSQL database for storing user and chat data.

- Socket.io: Enables real-time, bi-directional communication between clients and servers.

- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

- Redux Toolkit: A state management tool for managing application state efficiently.

- Redux Persist: Helps persist the Redux store across page reloads.

- Custom Hooks: Used to optimize and reuse logic across components.

## Project Type
Fullstack (MERN + Socket.io)

## Deployed App
Frontend: [https://mern-chat-app-bay-zeta.vercel.app/login]

Backend: [https://realtimechatapp-gi9s.onrender.com]

## Credentials
User
- username - ChatAppUser
- assword - ChatAppUser

User 2
- username - ChatAppUser2
- password - ChatAppUser2

## Directory Structure
```
RealTime Chat App/
├─ client/
│  ├─ Public/  
│  │  ├─ All Images are here  
│  │  ├─ index.html  
│  ├─ src/  
│  │  ├─ components/  
│  │  │  ├─ HomePage.jsx  
│  │  │  ├─ Login.jsx  
│  │  │  ├─ Message.jsx  
│  │  │  ├─ Messages.jsx  
│  │  │  ├─ MessageContainer.jsx  
│  │  │  ├─ OtherUser.jsx  
│  │  │  ├─ OtherUsers.jsx  
│  │  │  ├─ Register.jsx  
│  │  │  ├─ SendInput.jsx  
│  │  │  ├─ Sidebar.jsx  
│  │  ├─ hooks/  
│  │  │  ├─ useGetMessages.jsx  
│  │  │  ├─ useGetOtherUsers.jsx  
│  │  │  ├─ useGetRealTimeMessage.jsx  
│  │  ├─ store/  
│  │  │  ├─ messageSlice.jsx  
│  │  │  ├─ socketSlice.jsx  
│  │  │  ├─ store.jsx  
│  │  │  ├─ userSlice.jsx  
│  │  ├─ App.css  
│  │  ├─ App.jsx  
│  │  ├─ index.css  
│  │  ├─ index.js  
│  ├─ tailwind.config.js  
├─ server/  
│  ├─ config/  
│  │  ├─ db.js  
│  ├─ controllers/  
│  │  ├─ messageController.js  
│  │  ├─ userController.js  
│  ├─ middleware/  
│  │  ├─ authMiddleware.js  
│  ├─ models/  
│  │  ├─ conversationModel.js  
│  │  ├─ messageModel.js  
│  │  ├─ userModel.js  
│  ├─ routes/  
│  │  ├─ messageRoute.js  
│  │  ├─ userRoute.js  
│  ├─ socket/  
│  │  ├─ socket.js  
│  ├─ server.js  
 


```
## Video/Photo Walkthrough of the project

Will Upload it soon


## Features
- Real-time Messaging: Users can chat with other registered users in real time using Socket.io.

- User Authentication: Secure login and registration system using JWT authentication.

- Online/Offline Indicator: Displays a green dot next to online users.

- Persisted State: Redux Persist ensures state is maintained across reloads.

- Responsive Design: Built with Tailwind CSS and Daisy UI for a seamless experience across devices.

- Search By Name of user whom we want to Chat

- RESTful API: Backend built with Express.js and Node.js.

- Optimized State Management: Uses Redux Toolkit for efficient state handling.


## Installation & Getting started
To run the project locally, follow these steps:

```
## Install the Project
git clone https://github.com/Chetanbelwal/RealTimeChatApp.git

## Frontend
cd client
npm install
npm run dev

## Backend
cd server
npm install
npm run dev
```

## Environment Variables
Make sure to set up the following environment variables in a .env file in the server directory:

```
# Server Configuration  
PORT=5000  # Port number where the server runs  

# Database Configuration  
MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.mongodb.net/<DB_NAME>?retryWrites=true&w=majority&appName=Cluster0  

# Authentication  
JWT_SECRET=<YOUR_JWT_SECRET>  # Secret key for JWT authentication  

# Frontend URL  
FRONTEND_URL=http://localhost:5173  # URL of the frontend application  

#In Client Site
REACT_APP_BASE_URL = http://localhost:5000 # URL of the backend application 

```
