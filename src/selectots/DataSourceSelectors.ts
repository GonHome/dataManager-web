import {stateTypes} from '../reducers';

export const getOpenKeys = (state: stateTypes) => state.dataSource.openKeys;
export const getIsScroll = (state: stateTypes) => state.dataSource.isScroll;
