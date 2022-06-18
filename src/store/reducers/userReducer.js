import {
  SET_USERS_LIST,
  SET_DASHBOARD_COUNT,
  RESET_USER_LIST,
  FETCH_USER_LIST,
} from "../common/types";
const initialState = {
  userList: [],
  currentPage: 1,
  last_page: 0,
  total_record: 0,
  user: null,
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS_LIST:
      return { ...state, ...action.payload, loading: false };
    case RESET_USER_LIST:
      return {
        ...state,
        userList: [],
        currentPage: 1,
        last_page: 0,
        total_record: 0,
      };
    default:
      return state;
  }
};

const dashboardState = {
  totalUsers: 0,
  totalCoaches: 0,
};

export const dashboardReducer = (state = dashboardState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_COUNT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default userReducer;
