import {ActionType, getType} from 'typesafe-actions';
import * as dataSourceActions from '../actions/DataSourceActions';
export type actionTypes = ActionType<typeof dataSourceActions>;

const initialState = {
    openKeys: ['metadata'],
    isScroll: false,
};

const dataSource = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case getType(dataSourceActions.changeOpenKeys):
            return {...state, openKeys: action.openKeys};
        case getType(dataSourceActions.changeIsScroll):
            return {...state, isScroll: action.isScroll};
        default:
            return state;
    }
};

export default dataSource;
