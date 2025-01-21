import { configureStore , getDefaultMiddleware } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";
import socketSlice from "./socketSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    message: messageSlice.reducer,
    socket: socketSlice.reducer,
  },
// Was getting Serialized value to be stored on store of socket so I added this middleware to bypass that error

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["socket/setSocket"], // Ignore this action
        ignoredPaths: ["socket"], // Ignore the state path where the socket is stored
      },
    }),
});

export default store;
