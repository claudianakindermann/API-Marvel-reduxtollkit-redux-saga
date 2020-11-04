import { put, call, all, takeLatest } from "redux-saga/effects";

import { 
    getCharactersRequest,
    getCharactersSucess,
    getCharactersNext,
    getCharactersNextSucess,
    getCharactersPrev,
    getCharactersPrevSucess,
} from "./charactersSlice";

import { getCharacters } from './CharactersService';

export function* getCharactersRequestSaga(payload) {
    try {
        const { data } = yield call (getCharacters, payload)
        yield put(getCharactersSucess(data))
    } catch (error) {
        console.log(error)
    }    
}

export  function* getCharactersNextSaga(payload) {
    try {
        const { data } = yield call(getCharacters, payload)
        yield put(getCharactersNextSucess(data))
    } catch (error) {
        console.log(error)
    }
}

export  function* getCharactersPrevSaga(payload) {
    console.log('saga prev:', payload)
    try {
        const { data } = yield call(getCharacters, payload)
        yield put(getCharactersPrevSucess(data))
    } catch (error) {
        console.log(error)
    }
}

export default all([
    takeLatest(getCharactersRequest.type, getCharactersRequestSaga),
    takeLatest(getCharactersNext.type, getCharactersNextSaga),
    takeLatest(getCharactersPrev.type, getCharactersPrevSaga),
]);

