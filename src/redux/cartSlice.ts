import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
  _id: string;
  quantity: number;
  price: number;
}

export interface CartState {
  products: IProduct[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      const product = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.quantity += 1;
        state.products.push(action.payload);
      }

      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action: PayloadAction<IProduct>) => {
      state.quantity -= 1;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload._id),
        1
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    incrementProduct: (state, action: PayloadAction<IProduct>) => {
      const product = state.products.find(
        (item) => item._id === action.payload._id
      );
      product && product.quantity++;
      state.total += action.payload.price;
    },
    decrementProduct: (state, action: PayloadAction<IProduct>) => {
      const product = state.products.find(
        (item) => item._id === action.payload._id
      );
      product && product.quantity--;
      state.total -= action.payload.price;
    },
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  incrementProduct,
  decrementProduct,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
