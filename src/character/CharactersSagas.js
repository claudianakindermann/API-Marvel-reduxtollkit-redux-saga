import { put, call, all, takeLatest } from "redux-saga/effects";

import { 
    getCharactersRequest,
    getCharactersSucess,
    getCharactersNext,
    getCharactersNextSucess,
    getCharactersPrev,
    getCharactersPrevSucess,
    getProfileRequest,
    getProfileSucess,
} from './charactersSlice';

import {
    getCharacters,
    getProfile
} from './CharactersService';

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

export function* getProfileRequestSaga(payload) {
    try {
        const { data } = yield call (getProfile, payload)
        console.log('retorno do service', data)
        yield put(getProfileSucess(data))
    } catch (error) {
        console.log(error)        
    }
}

export default all([
    takeLatest(getCharactersRequest.type, getCharactersRequestSaga),
    takeLatest(getCharactersNext.type, getCharactersNextSaga),
    takeLatest(getCharactersPrev.type, getCharactersPrevSaga),
    takeLatest(getProfileRequest.type, getProfileRequestSaga),
]);

