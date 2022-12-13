import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  isFetching: false,
  error: false,
  success: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    orderStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.success = false;
    },
    orderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.orders = action.payload;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    addOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.orders.push(action.payload);
    },
    editOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.success = true;
      state.orders[
        state.orders.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
    },
  },
});

export const {
  orderStart,
  orderFailure,
  getOrderSuccess,
  deleteOrderSuccess,
  addOrderSuccess,
  editOrderSuccess,
} = orderSlice.actions;
export default orderSlice.reducer;
