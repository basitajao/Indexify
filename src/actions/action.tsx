import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  GET_ALL_COMPANIES_REQUEST,
  GET_ALL_COMPANIES__SUCCESS,
  GET_ALL_COMPANIES_FAIL,
  SEARCH_COMPANIES,
  SEARCH_COMPANIES_SUCCESS,
  SEARCH_COMPANIES_FAIL,
} from "../constants/constants";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import { request } from "../utils/axios";
import { setAuthToken, setIsAuthenticated } from "../utils/helper";

export const login =
  (
    email: string,
    navigateTo: any
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const { data } = await request.post("/auth/login", { email });
      setAuthToken(data?.token);
      setIsAuthenticated("true");
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
      navigateTo();
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: err,
      });
    }
  };

export const logout =
  (
    navigateToLogin: any
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: USER_LOGOUT });
      dispatch({
        type: USER_LOGOUT_SUCCESS,
        payload: false,
      });
      localStorage.clear();
      navigateToLogin();
    } catch (error) {
      dispatch({
        type: USER_LOGOUT_FAIL,
        payload: error,
      });
    }
  };

export const getAllCompanies =
  (page: number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: GET_ALL_COMPANIES_REQUEST,
      });
      const { data } = await request.get(`/company?page=${page}`);
      dispatch({
        type: GET_ALL_COMPANIES__SUCCESS,
        payload: data?.payload,
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_COMPANIES_FAIL,
        payload: err,
      });
    }
  };
export const searchCompanies =
  (
    page: number,
    name: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({
        type: SEARCH_COMPANIES,
      });
      const { data } = await request.get(`/company/${name}?page=${page}`);
      dispatch({
        type: SEARCH_COMPANIES_SUCCESS,
        payload: data?.payload,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_COMPANIES_FAIL,
        payload: err,
      });
    }
  };
