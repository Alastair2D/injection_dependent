// Useful if we end up with more than one reducer
import { combineReducers } from 'redux';
import sites from './sites';
import history from './history';

const reducers = combineReducers({
    sites,
    history
});

export default reducers;
