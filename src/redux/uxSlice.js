import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: { type: "info", text: null },
};

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = styleSlice.actions;
export default styleSlice.reducer;
