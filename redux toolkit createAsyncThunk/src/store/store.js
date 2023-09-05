import { configureStore } from "@reduxjs/toolkit";
import { gitUserReducer } from "../slice/userSlice";
export const store = configureStore({
  reducer: {
    app: gitUserReducer,
  },
});
