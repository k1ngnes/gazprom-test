import {applyMiddleware, createStore} from "redux";
import {tableReducer} from "./Table/TableReducers.ts";
import {thunk} from "redux-thunk";

export const store = createStore(tableReducer, applyMiddleware(thunk))