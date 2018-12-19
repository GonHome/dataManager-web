import * as React from 'react';
import { stateTypes } from '../reducers';
import DataSourceBoard from '../components/dataSource/DataSourceBoard';
import { connect } from 'react-redux';
import {getMainHeight, getWidth, getRightWidth, getRoute} from '../selectots/CommonSelectors';
import {getOpenKeys, getIsScroll} from '../selectots/DataSourceSelectors';
import {changeOpenKeys, changeIsScroll} from '../actions/DataSourceActions';
import * as DataSourceConstants from '../constants/DataSourceConstants';
import * as dataSource from '../models/dataSource';
import {routeTypes} from '../reducers/router';

type propTypes = {
    height: number;
    width: number;
    rightWidth: number;
    leftMenus: dataSource.leftMenu[];
    route: routeTypes;
    changeOpenKeys: (openKeys: string[]) => void;
    openKeys: string[];
    isScroll: boolean;
    changeIsScroll: (isScroll: boolean) => void;
};

const DataSourceContainer = (props: propTypes) => <DataSourceBoard {...props} />;

const mapStateToProps = (state: stateTypes) => ({
    height: getMainHeight(state),
    width: getWidth(state),
    rightWidth: getRightWidth(state),
    leftMenus: DataSourceConstants.LEFT_MENUS,
    route: getRoute(state),
    openKeys: getOpenKeys(state),
    isScroll: getIsScroll(state),
});

export default connect(mapStateToProps, {
    changeOpenKeys, changeIsScroll,
})(DataSourceContainer);
