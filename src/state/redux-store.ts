import {combineReducers} from "redux";
import thunk from "redux-thunk"
import {configureStore} from "@reduxjs/toolkit";
import {mainReducer} from "./mainReducer";

const rootReducer = combineReducers({
    mainReducer: mainReducer,
})

export type rootReducerType = typeof rootReducer

export type AppRootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})