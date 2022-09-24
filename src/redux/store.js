import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
  },
});
