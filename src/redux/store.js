// const { createStore, combineReducers } = require("redux");
import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todo-reducer";

const rootReducer = combineReducers({ todosItem: todoReducer });

const store = createStore(rootReducer);

export default store;
