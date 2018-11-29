import { stateTypes } from '../reducers';
export const getRoute = (state: stateTypes) => state.router.route;
export const getHeight = (state: stateTypes) => state.enviroment.height;
export const getWidth = (state: stateTypes) => state.enviroment.width;
