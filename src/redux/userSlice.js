import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isFetching = true;
      state.error = "";
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.error = "";
      state.currentUser = action.payload;
    },
    userFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { userStart, loginSuccess, userFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
