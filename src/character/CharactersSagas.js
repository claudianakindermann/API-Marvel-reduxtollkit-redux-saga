import { put, call, all, takeLatest } from "redux-saga/effects";

import { 
    getCharactersRequest,
    getChactersSucess,
} from "./charactersSlice";

import { getCharacters } from './CharactersService';

export function* getCharactersRequestSaga() {
    try {
        const { data } = yield call (getCharacters)
        console.log('************** saga data ==', data);
        yield put(getChactersSucess(data))
    } catch (error) {
        console.log(error)
    }    
}
export default all([
    takeLatest(getCharactersRequest.type, getCharactersRequestSaga),
    // takeLatest(getCharactersSucess.type, getCharactersSucessSaga),
]);

