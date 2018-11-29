import {ActionType, getType} from 'typesafe-actions';
import * as environmentActions from '../actions/EnvironmentActions';
export type actionTypes = ActionType<typeof environmentActions>;

export type routeTypes = Readonly<{
    height: number ;
    width: number ;
}>;

const initialState = {
    height: window.innerHeight,
    width: window.innerWidth,
};

const environment = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case getType(environmentActions.initEnvironment):
            return {...state, width: action.width, height: action.height};
        default:
            return state;
    }
};

export default environment;
