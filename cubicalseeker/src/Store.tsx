import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlices";

export default configureStore({
    reducer:{
        user:userReducer,
    }
})