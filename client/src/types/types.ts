import {store} from "../redux/store.ts";

export type TTableData = {
    articleid: string,
    subarticleid: string,
    articlename: string,
    external_str_id: string,
    ecrlongname: string,
}

export type TTableActionForError = {
    type: string,
    payload?: string
}

export type TTableActionForSuccess = {
    type: string,
    payload?: TTableData[]
}

export type TTableActionForRequest = {
    type: string,
}

export type TTableActions = TTableActionForSuccess | TTableActionForError | TTableActionForRequest

export type TTableState = {
    loading: boolean,
    table?: TTableData[],
    error: boolean,
    errorMessage?: string
}

export type DispatchThunk = typeof store.dispatch