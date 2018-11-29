import { combineReducers } from 'redux';
import router from './router';
import environment from './environment';
import { StateType } from 'typesafe-actions';

const rootReducer = combineReducers({router, enviroment: environment});
export type stateTypes = StateType<typeof rootReducer>;
export default rootReducer;
