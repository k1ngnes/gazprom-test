import {applyMiddleware, createStore} from "redux";
import {tableReducer} from "./Table/TableReducers.ts";
import {thunk} from "redux-thunk";
import {createLogger} from "redux-logger"

const logger = createLogger()

export const store = createStore(tableReducer, applyMiddleware(logger, thunk))