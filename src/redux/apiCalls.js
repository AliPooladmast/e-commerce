import { publicRequest, userRequest } from "../requestMethods";
import { loginSuccess, userFailure, userStart } from "./userSlice";
import { setMessage } from "./uxSlice";

//User API Calls
export const login = async (dispatch, user) => {
  dispatch(userStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    if (res?.data) {
      dispatch(loginSuccess(res.data));
      userRequest.defaults.headers.token = "Bearer " + res.data.token;
      dispatch(
        setMessage({
          type: "success",
          text: "welcome! " + res.data.username?.toString(),
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
    if (res?.data) {
      dispatch(loginSuccess(res.data));
      dispatch(
        setMessage({
          type: "success",
          text:
            res.data.username?.toString() +
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
    if (res?.data) {
      dispatch(loginSuccess(res.data));
      dispatch(
        setMessage({
          type: "success",
          text:
            res.data.username?.toString() +
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
