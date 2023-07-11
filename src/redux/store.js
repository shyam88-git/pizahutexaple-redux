import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { applyMiddleware } from "@reduxjs/toolkit";

let store=configureStore({reducer:rootReducer},composeWithDevTools(applyMiddleware(logger)));

export default store;




