import { combineReducers } from 'redux';
import router from './router';
import { StateType } from 'typesafe-actions';

const rootReducer = combineReducers({router});
export type stateTypes = StateType<typeof rootReducer>;
export default rootReducer;
