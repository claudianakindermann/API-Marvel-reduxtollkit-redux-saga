import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import reducers from './reducers';
import Sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(Sagas);

export default store;