import { actions } from "react-table";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  GET_ALL_COMPANIES_REQUEST,
  GET_ALL_COMPANIES__SUCCESS,
  GET_ALL_COMPANIES_FAIL,
} from "../constants/constants";

export interface UserState {
  loading?: boolean;
  error?: string;
  isAuthenticated: boolean;
}

interface Action {
  type: string;
  payload?: string;
}

export const userLoginReducer = (
  state: UserState = { isAuthenticated: false },
  action: Action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, isAuthenticated: false };
    case USER_LOGIN_SUCCESS:
      return { loading: false, isAuthenticated: true };
    case USER_LOGIN_FAIL:
      return { loading: false, isAuthenticated: false, error: actions.payload };
    case USER_LOGOUT:
      return { loading: true };
    case USER_LOGOUT_SUCCESS:
      return { loading: false, isAuthenticated: action.payload };
    case USER_LOGOUT_FAIL:
      return { loading: false, error: actions.payload };
    default:
      return state;
  }
};

// const initialState = {
//   loading: false,
//   error: null,
//   data: null,
// };

export interface CompanyState {
  loading: boolean;
  error?: string;
  data?: any;
}

export const getAllCompanies = (
  state: CompanyState = { loading: false },
  action: Action
) => {
  switch (action.type) {
    case GET_ALL_COMPANIES_REQUEST:
      return { loading: true };
    case GET_ALL_COMPANIES__SUCCESS:
      return { loading: false, data: action.payload };
    case GET_ALL_COMPANIES_FAIL:
      return { loading: false, error: actions.payload };
    default:
      return state;
  }
};
