import { path } from '../models/models';
import * as ActionTypes from '../constants/ActionTypes';
import { createStandardAction } from 'typesafe-actions';

export const initRouter = createStandardAction(ActionTypes.CHANGE_ROUTE).map(
    ( paths: path[] ) => {
        const pathname = location.pathname;
        console.log(paths);
        return { route: {keys: {}, options: {}, path: pathname}};
    }
);
