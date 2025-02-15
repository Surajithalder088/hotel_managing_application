"use client"

import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/authUser/authUserSlice"

export const store=configureStore({
    reducer:{
            authUser:authUserReducer
    },
})