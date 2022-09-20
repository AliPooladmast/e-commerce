import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
