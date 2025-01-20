import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";
import socketSlice from "./socketSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    message: messageSlice.reducer,
    socket: socketSlice.reducer,
  },
});

export default store;
