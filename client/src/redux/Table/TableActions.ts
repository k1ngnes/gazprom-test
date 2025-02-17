import {FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS} from "./TableTypes.ts";
import {TTableData} from "../../types/types.ts";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = (table: TTableData) => {
    return {
        type: FETCH_SUCCESS,
        payload: table
    }
}

export const fetchError = (error: string) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const fetchTable = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchRequest());
        axios.get("http://localhost:8080/api")
            .then(res => {
                const table = res.data
                dispatch(fetchSuccess(table))
            })
            .catch(err => {
                const errorMessage = err.message
                dispatch(fetchError(errorMessage));
            })
    }
}




