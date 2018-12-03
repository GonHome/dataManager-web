import { stateTypes } from '../reducers';
import * as CommonConstants from '../constants/CommonConstants';
export const getRoute = (state: stateTypes) => state.router.route;
export const getHeight = (state: stateTypes) => state.environment.height;
export const getWidth = (state: stateTypes) => state.environment.width;
export const getLeftWidth = (state: stateTypes) => state.environment.leftWidth;
export const getMainHeight = (state: stateTypes) => getHeight(state) - CommonConstants.HEAD_HEIGHT;
export const getRightWidth = (state: stateTypes) => getWidth(state) - getLeftWidth(state) - 13;
