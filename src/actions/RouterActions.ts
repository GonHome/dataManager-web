import { path } from '../models/models';
import * as ActionTypes from '../constants/ActionTypes';
import { createStandardAction } from 'typesafe-actions';
import {parseRoute} from '../util/RouterUtil';

export const initRouter = createStandardAction(ActionTypes.CHANGE_ROUTE).map(
    ( paths: path[] ) => {
        const urls = paths.map(item => (item.path));
        const hash = location.pathname ? location.pathname : '';
        const route = parseRoute(hash, urls);
        return { route: route};
    }
);
