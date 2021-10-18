import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      state.push(action.payload);
    },

    todoRemoved: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    todoUpdated: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },

    todoCompleted: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});

export const { todoAdded, todoRemoved, todoUpdated, todoCompleted } =
  todosSlice.actions;

export const todoReducer = todosSlice.reducer;
