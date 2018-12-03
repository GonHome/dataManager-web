import {ActionType, getType} from 'typesafe-actions';
import * as environmentActions from '../actions/EnvironmentActions';
import * as CommonConstants from '../constants/CommonConstants';
export type actionTypes = ActionType<typeof environmentActions>;

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth,
    leftWidth: CommonConstants.LEFT_WIDTH,
};

const environment = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case getType(environmentActions.initEnvironment):
            return {...state, width: action.width, height: action.height};
        case getType(environmentActions.exploitMouseMoveLeft):
            return {...state, leftWidth: action.leftWidth};
        default:
            return state;
    }
};

export default environment;
