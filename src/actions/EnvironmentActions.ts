import * as ActionTypes from '../constants/ActionTypes';
import { createStandardAction } from 'typesafe-actions';

export const initEnvironment = createStandardAction(ActionTypes.WINDOW_RESIZE).map(
    () => {
        return { height: window.innerHeight, width: window.innerWidth };
    }
);
