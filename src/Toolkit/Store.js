import { configureStore } from "@reduxjs/toolkit";
import userSlice from './UserSlice'
// import LikeSlice from "./LikeSlice";


export const store=configureStore({
    reducer:{
        user:userSlice,
        // like:LikeSlice
      
    }
})