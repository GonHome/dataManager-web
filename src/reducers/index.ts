import { combineReducers } from 'redux';
import router from './router';
import environment from './environment';
import exploit from './exploit';
import dataSource from './dataSource';
import { StateType } from 'typesafe-actions';

const rootReducer = combineReducers({router, environment, exploit, dataSource});
export type stateTypes = StateType<typeof rootReducer>;
export default rootReducer;
