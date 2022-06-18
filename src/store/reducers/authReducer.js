import {
  FORM_SUBMITTING,
  FORM_SUCCESS,
  INITIALIZE_FORM,
  INITIALIZE_LOADER,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RESET_FORM_SUBMITTING,
  RESET_LOADING,
  SIGNOUT_SUCCESS,
} from "../common/types";
const initialState = {
  error: "",
  login_info: {},
};

const loaderState = {
  loading: false,
};

const formState = {
  success: false,
  submitting: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        login_info: { ...action.payload },
      };
    case SIGNOUT_SUCCESS:
      return state;

    default:
      return state;
  }
};

export const loaderReducer = (state = loaderState, action) => {
  switch (action.type) {
    case INITIALIZE_LOADER:
      return { ...state, loading: true };
    case RESET_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export const formReducer = (state = formState, action) => {
  switch (action.type) {
    case INITIALIZE_FORM:
      return {
        ...state,
        success: false,
      };
    case FORM_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case FORM_SUBMITTING:
      return {
        ...state,
        submitting: true,
      };
    case RESET_FORM_SUBMITTING:
      return {
        ...state,
        submitting: false,
      };
    default:
      return state;
  }
};
export default authReducer;
