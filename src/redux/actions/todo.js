import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./action-types";

// add todo actions
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

//delete todo actions
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

// update todo actions
export const updateTodo = (todo, id) => ({
  type: UPDATE_TODO,
  payload: { todo: todo, todoId: id },
});
