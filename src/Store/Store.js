import { configureStore, combineReducers } from "@reduxjs/toolkit";
import toolkitReduser from "./toolkitReduser";

const rootReducer = combineReducers({
  toolkit: toolkitReduser,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
