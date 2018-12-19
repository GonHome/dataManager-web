import * as ActionTypes from '../constants/ActionTypes';
import { createStandardAction } from 'typesafe-actions';

export const changeOpenKeys = createStandardAction(ActionTypes.CHANGE_OPENKEYS_DATA).map(
    (openKeys: string[]) => {
        return { openKeys };
    }
);

export const changeIsScroll = createStandardAction(ActionTypes.CHANGE_ISSCROLL_DATA).map(
    (isScroll: boolean) => {
        return { isScroll };
    }
);
