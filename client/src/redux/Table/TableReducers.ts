import {FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS} from "./TableTypes.ts";
import {TTableActionForError, TTableActionForSuccess, TTableActions, TTableState} from "../../types/types.ts";

const initialState: TTableState = {
    loading: false,
    table: undefined,
    error: false,
    errorMessage: undefined
}

export const tableReducer = (state: TTableState = initialState, action: TTableActions) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                table: (action as TTableActionForSuccess).payload
            }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: (action as TTableActionForError) .payload
            }
        default:
            return state
    }
}