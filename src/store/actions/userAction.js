import AXIOS, { setToken } from "../common/api_helper";
import {
  FETCH_COACH_LIST,
  FETCH_USER_LIST,
  SET_COACHES_LIST,
  SET_DASHBOARD_COUNT,
  SET_USERS_LIST,
} from "../common/types";
import { toast } from "react-toastify";
import { APIs } from "../common/constants";

export const getCount = () => async (dispatch) => {
  try {
    setToken();
    const { data } = await AXIOS.get(APIs.GET_DASHBOARD_COUNT);

    if (data.status) {
      dispatch({
        type: SET_DASHBOARD_COUNT,
        payload: {
          totalUsers: data.users || 0,
          totalCoaches: data.coaches || 0,
        },
      });
    }
  } catch (err) {
    toast.error(err.message);
  }
};

export const getUserLists =
  (page = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_USER_LIST });
      setToken();
      const { data } = await AXIOS.get(
        `${APIs.GET_ALL_USER_LIST}?page=${page + 1}`
      );

      if (data.status) {
        dispatch({
          type: SET_USERS_LIST,
          payload: {
            ...data.record,
          },
        });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

export const getCoachLists =
  (page = 0) =>
  async (dispatch) => {
    try {
      dispatch({ type: FETCH_COACH_LIST });
      setToken();
      const { data } = await AXIOS.get(
        `${APIs.GET_ALL_COACH_LIST}?page=${page + 1}`
      );

      if (data.status) {
        dispatch({
          type: SET_COACHES_LIST,
          payload: {
            ...data.record,
          },
        });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
