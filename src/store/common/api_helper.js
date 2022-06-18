import axios from "axios";
import { getSession } from "../actions/authAction";
import { BASE_URL } from "./constants";

const instance = axios.create({
  baseURL: BASE_URL,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
});

export const setToken = () => {
  let { Authorization } = getSession();
  return (instance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${Authorization}`);
};

export default instance;
