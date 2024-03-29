import { publicRequest, userRequest } from "../requestMethods";
import { resetCart } from "./cartSlice";
import {
  orderStart,
  addOrderSuccess,
  deleteOrderSuccess,
  editOrderSuccess,
  getOrderSuccess,
  orderFailure,
} from "./orderSlice";
import { loginSuccess, userFailure, userStart } from "./userSlice";
import { setMessage } from "./uxSlice";

//User API Calls
export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if (res) {
      userRequest.defaults.headers.token = "Bearer " + res.data?.token;
      dispatch(loginSuccess(res.data));
      dispatch(
        setMessage({
          type: "success",
          text: "welcome! " + res.data?.username?.toString(),
        })
      );
    }
  } catch (err) {
    dispatch(userFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};

export const register = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    if (res) {
      dispatch(loginSuccess(res.data));
      dispatch(
        setMessage({
          type: "success",
          text:
            res.data?.username?.toString() +
            " account has been created successfully",
        })
      );
    }
  } catch (err) {
    dispatch(userFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};

export const editUser = async (dispatch, userId, user) => {
  dispatch(userStart());
  try {
    const res = await userRequest.put("/users/" + userId, user);
    if (res) {
      dispatch(loginSuccess(res.data));
      dispatch(
        setMessage({
          type: "success",
          text:
            res.data?.username?.toString() +
            " account has been edited successfully",
        })
      );
    }
  } catch (err) {
    dispatch(userFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};

//Order API Calls
export const getOrders = async (dispatch, userId) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.get("orders/find/" + userId);
    dispatch(getOrderSuccess(res?.data));
  } catch (err) {
    dispatch(orderFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};

export const deleteOrder = async (dispatch, userId, orderId) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.delete(
      `/orders/${userId}?orderId=${orderId}`
    );

    if (res) {
      dispatch(deleteOrderSuccess(orderId));
      dispatch(
        setMessage({
          type: "success",
          text: "order has been deleted successfully",
        })
      );
    }
  } catch (err) {
    dispatch(orderFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};

export const addStripeOrder = async (dispatch, userId, data) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.post(
      "checkout/create-session/" + userId,
      data
    );

    if (res) {
      dispatch(resetCart());
      dispatch(addOrderSuccess(res.data));
      dispatch(
        setMessage({
          type: res.data?.status === "paid" ? "success" : "error",
          text:
            res.data?.status === "paid"
              ? "order has been paid successfully"
              : "order could not been paid",
        })
      );
    }
  } catch (err) {
    dispatch(orderFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};

export const editOrder = async (dispatch, userId, orderId, order) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.put(
      `/orders/${userId}?orderId=${orderId}`,
      order
    );

    if (res) {
      dispatch(editOrderSuccess(res.data));
      dispatch(
        setMessage({
          type: "success",
          text: "order address has been edited successfully",
        })
      );
    }
  } catch (err) {
    dispatch(orderFailure());
    dispatch(
      setMessage({ type: "error", text: err?.response?.data?.toString() })
    );
  }
};
