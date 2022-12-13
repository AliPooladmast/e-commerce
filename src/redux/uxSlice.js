import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: { type: "info", text: null },
  loading: false,
};

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setMessage, setLoading } = styleSlice.actions;
export default styleSlice.reducer;
