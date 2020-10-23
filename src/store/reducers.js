import { combineReducers } from 'redux';
import charactersReducer from '../character/charactersSlice';

const reducers = combineReducers({
    characters: charactersReducer,
});

export default reducers;