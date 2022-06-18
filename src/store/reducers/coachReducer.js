import {
  FETCH_COACH_LIST,
  RESET_COACH_LIST,
  SET_COACHES_LIST,
} from "../common/types";
const initialState = {
  allCoach: [],
  currentPage: 1,
  last_page: 0,
  total_record: 0,
  per_page: 0,
  coach: null,
  error: null,
  loading: false,
};

const coachReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COACH_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_COACHES_LIST:
      return { ...state, ...action.payload, loading: false };
    case RESET_COACH_LIST:
      return {
        ...state,
        allCoach: [],
        currentPage: 1,
        last_page: 0,
        total_record: 0,
      };
    default:
      return state;
  }
};
export default coachReducer;
