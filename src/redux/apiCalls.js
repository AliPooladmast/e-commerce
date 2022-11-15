import { publicRequest, userRequest } from "../requestMethods";
import { loginSuccess, userFailure, userStart } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res?.data));
    userRequest.defaults.headers.token = "Bearer " + res?.data?.token;
  } catch (err) {
    dispatch(userFailure());
  }
};
