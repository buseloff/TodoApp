import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { todoReducer } from "./todo-reducer/todo.reducer";
import { userReducer } from "./user-reducer/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const reducers = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [],
});

export default store;
