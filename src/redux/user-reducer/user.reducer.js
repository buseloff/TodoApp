import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: "", name: "", username: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
      };
    },

    removeUser: (state, action) => {
      return {
        ...state,
        id: "",
        name: "",
        username: "",
      };
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
