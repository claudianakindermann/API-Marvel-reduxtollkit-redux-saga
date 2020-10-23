import { all } from 'redux-saga/effects';

import CharactersSagas from '../character/CharactersSagas';

function* Sagas() {
    yield all([
        CharactersSagas
    ]);
};

export default Sagas;