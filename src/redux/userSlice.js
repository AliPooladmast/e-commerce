import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    userFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { userStart, loginSuccess, userFailure } = userSlice.actions;
export default userSlice.reducer;
