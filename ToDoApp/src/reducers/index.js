import { combineReducers } from 'redux';
import CreateToDoReducer from './CreateToDoReducer';

export default combineReducers({
    createToDo: CreateToDoReducer,
});