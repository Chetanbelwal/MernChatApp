import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import messageSlice from "./messageSlice";
import socketSlice from "./socketSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["socket"], // Exclude the socket slice from persistence
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  message: messageSlice.reducer,
  socket: socketSlice.reducer, // Non-serializable, excluded from persistence
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "socket/setSocket", // Custom action to ignore
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER, // Redux Persist actions to ignore
        ],
        ignoredPaths: ["socket"], // Ignore the state path where the socket is stored
      },
    }),
});

export default store;
