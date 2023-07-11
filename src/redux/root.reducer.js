import { combineReducers } from "@reduxjs/toolkit";
import { pizzaReducer } from "./pizahut/reducer";

let rootReducer=combineReducers({pizza:pizzaReducer});

export {rootReducer};