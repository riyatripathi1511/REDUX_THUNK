import { configureStore } from "@reduxjs/toolkit";
import reduxReducer from "./reduxReducer";

const reduxStore = configureStore({
  reducer:{
    postReducerThunk: reduxReducer
  }
})
export default reduxStore;