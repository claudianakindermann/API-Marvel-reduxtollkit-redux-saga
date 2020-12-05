import { put, call, all, takeLatest } from "redux-saga/effects";

import { 
    getCharactersRequest,
    getCharactersSucess,
    getProfileRequest,
    getProfileSucess,
    searchCharactersRequest,
    getSeriesRequest,
    getSeriesSucess
} from './charactersSlice';

import {
    getCharacters,
    getProfile,
    searchCharacters,
    getSeries
} from './CharactersService';

export function* getCharactersRequestSaga({ payload }) {
    const offset = payload.offset;
    try {
        const { data } = yield call (getCharacters, payload)
        yield put(getCharactersSucess({offset, data}))
    } catch (error) {        
        console.log(error)
    }    
}

export function* getProfileRequestSaga(payload) {
    try {
        const { data } = yield call (getProfile, payload)
        yield put(getProfileSucess(data))
    } catch (error) {
        console.log(error)        
    }
}


export function* searchCharactersRequestSaga({ payload }) {
    const offset = payload.offset;
    try {
        const { data } = yield call (searchCharacters, payload)
        yield put(getCharactersSucess({offset, data})) 
    } catch (error) {
        console.log(error)
    }
}

export function* getSeriesRequestSaga(payload) {
    try {
        const { data } = yield call(getSeries, payload)
        console.log('series saga', data)
        yield put (getSeriesSucess(data))
    } catch (error) {
        console.log(error)
    }
}

export default all([
    takeLatest(getCharactersRequest.type, getCharactersRequestSaga),
    takeLatest(getProfileRequest.type, getProfileRequestSaga),
    takeLatest(searchCharactersRequest.type, searchCharactersRequestSaga),
    takeLatest(getSeriesRequest.type, getSeriesRequestSaga),
]);

