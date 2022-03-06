import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  getAllCompanies,
  searchCompany,
} from "./reducers/index";

const reducers = combineReducers({
  userAuth: userLoginReducer,
  companies: getAllCompanies,
  searchCompany: searchCompany,
});

const initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type RootState = ReturnType<typeof store.getState>;
