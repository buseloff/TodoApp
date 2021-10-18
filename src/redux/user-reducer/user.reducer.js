import { createSlice } from "@reduxjs/toolkit";

const initialState = { id: "", name: "", username: "" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded: (state, action) => {
      return {
        ...action.payload,
      };
    },

    userRemoved: (state, action) => {
      return initialState;
    },
  },
});

export const { userAdded, userRemoved } = userSlice.actions;

export const userReducer = userSlice.reducer;
