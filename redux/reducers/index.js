// Useful if we end up with more than one reducer
import { combineReducers } from 'redux';
import tasks from './tasks';

const reducers = combineReducers({
    tasks
});

export default reducers;
