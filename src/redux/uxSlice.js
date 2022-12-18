import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: { type: "info", text: null },
  loading: false,
  displaySideMenu: false,
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
    sideMenuToggle: (state) => {
      state.displaySideMenu = !state.displaySideMenu;
    },
  },
});

export const { setMessage, setLoading, sideMenuToggle } = styleSlice.actions;
export default styleSlice.reducer;
