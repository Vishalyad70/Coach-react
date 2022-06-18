import AXIOS, { setToken } from "../common/api_helper";
import { APIs, COOKIE_EXPIRED } from "../common/constants";
import {
  FORM_SUBMITTING,
  FORM_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RESET_FORM_SUBMITTING,
  SIGNOUT_SUCCESS,
} from "../common/types";
import { toast } from "react-toastify";

export const login =
  (payload, resetForm, history, setCookie) => async (dispatch) => {
    try {
      dispatch({
        type: FORM_SUBMITTING,
      });

      const { data } = await AXIOS.post(APIs.ADMIN_LOGIN, { ...payload });
      dispatch({
        type: FORM_SUCCESS,
      });
      dispatch({
        type: RESET_FORM_SUBMITTING,
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          ...data.record,
        },
      });
      //save session
      saveSession(data.record);
      //save cookie
      if (payload.rememberMe) {
        console.log("saved");
        setCookie("email", payload.email, {
          path: "/",
          maxAge: COOKIE_EXPIRED,
        });
        setCookie("password", payload.password, {
          path: "/",
          maxAge: COOKIE_EXPIRED,
        });
      }
      toast.success(data.message);
      resetForm(false);
      history.push("/dashboard");
    } catch (err) {
      dispatch({
        type: RESET_FORM_SUBMITTING,
      });
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          error:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        },
      });
      if (err.response && err.response.status === 401) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
      }
    }
  };

export const saveSession = (data) => {
  localStorage.setItem("Authorization", data.authtoken);
  localStorage.setItem("id", data.id);
};

export const getSession = () => {
  return {
    Authorization: localStorage.getItem("Authorization"),
    user_id: localStorage.getItem("id"),
  };
};

export const clearSession = () => {
  localStorage.removeItem("Authorization");
  localStorage.removeItem("id");
};

export const forgotPassword = (payload, history) => async (dispatch) => {
  try {
    dispatch({
      type: FORM_SUBMITTING,
    });
    const { data } = await AXIOS.post(APIs.FORGOT_PASSWORD, { ...payload });
    dispatch({
      type: FORM_SUCCESS,
    });
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });
    if (data.status) {
      localStorage.setItem("reset_email", payload.email);
      history.push("/change-password");
      toast.success(data.message);
    }
  } catch (err) {
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });

    if (
      err.response &&
      (err.response.status === 412 || err.response.status === 401)
    ) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message);
    }
  }
};

export const changePassword = (payload, history) => async (dispatch) => {
  try {
    dispatch({
      type: FORM_SUBMITTING,
    });
    const { data } = await AXIOS.post(APIs.CHANGE_PASSWORD, { ...payload });
    dispatch({
      type: FORM_SUCCESS,
    });
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });
    if (data.status) {
      localStorage.removeItem("reset_email");
      history.push("/");
      toast.success(data.message);
    }
  } catch (err) {
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });

    if (
      err.response &&
      (err.response.status === 412 || err.response.status === 401)
    ) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message);
    }
  }
};

export const logout = (history) => async (dispatch) => {
  try {
    setToken();
    const { data } = await AXIOS.get(APIs.ADMIN_LOGOUT);
    if (data.status) {
      dispatch({ type: SIGNOUT_SUCCESS });
      clearSession();
      toast.success(data.message);
      history.push("/");
    }
  } catch (err) {
    console.log(err);
  }
};
