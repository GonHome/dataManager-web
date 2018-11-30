import { stateTypes } from '../reducers';
import * as CommonConstants from '../constants/CommonConstants';
export const getRoute = (state: stateTypes) => state.router.route;
export const getHeight = (state: stateTypes) => state.enviroment.height;
export const getWidth = (state: stateTypes) => state.enviroment.width;
export const getLeftWidth = (state: stateTypes) => state.enviroment.leftWidth;
export const getMainHeight = (state: stateTypes) => state.enviroment.height - CommonConstants.HEAD_HEIGHT;
