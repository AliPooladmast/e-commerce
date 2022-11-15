import { publicRequest } from "../requestMethods";
import { loginSuccess, userFailure, userStart } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res?.data));
  } catch (err) {
    dispatch(userFailure());
  }
};
