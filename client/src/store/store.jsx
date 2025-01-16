import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";

const store = configureStore({
  reducer: { user: userSlice.reducer, message: messageSlice.reducer },
});

export default store;
