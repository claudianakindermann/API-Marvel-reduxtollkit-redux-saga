import { put, call, all, takeLatest } from "redux-saga/effects";

import { 
    getCharactersRequest, 
} from "./charactersSlice";

export function* getCharactersRequestSaga() {    
}

export default all([
    takeLatest(getCharactersRequest.type, getCharactersRequestSaga),
])