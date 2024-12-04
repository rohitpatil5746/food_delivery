import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/Counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
