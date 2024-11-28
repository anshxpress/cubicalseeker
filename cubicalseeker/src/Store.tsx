import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/UserSlices";
import profileReducer from "./Slices/ProfileSlice";
import filterReducer from "./Slices/FilterSlice";

export default configureStore({
    reducer:{
        user:userReducer,
        profile: profileReducer,
        filter:filterReducer
    }
});