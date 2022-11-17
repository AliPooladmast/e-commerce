import { publicRequest, userRequest } from "../requestMethods";
import { loginSuccess, userFailure, userStart } from "./userSlice";

//User API Calls
export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res?.data));
    userRequest.defaults.headers.token = "Bearer " + res?.data?.token;
  } catch (err) {
    dispatch(userFailure(err?.response?.data));
  }
};

export const register = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(loginSuccess(res?.data));
    userRequest.defaults.headers.token = "Bearer " + res?.data?.token;
  } catch (err) {
    dispatch(userFailure(err?.response?.data));
  }
};

export const editUser = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await userRequest.put("/users/" + user._id, user);
    dispatch(loginSuccess(res?.data));
  } catch (err) {
    dispatch(userFailure(err?.response?.data));
  }
};
