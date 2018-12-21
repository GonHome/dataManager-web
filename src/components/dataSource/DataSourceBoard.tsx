import React, { Component } from 'react';
import LeftMenu from './left/LeftMenu';
import MainBoard from './center/MainBoard';
import * as dataSource from '../../models/dataSource';
import {routeTypes} from '../../reducers/router';
type propTypes = {
    height: number;
    width: number;
    leftMenus: dataSource.leftMenu[];
    route: routeTypes;
    changeOpenKeys: (openKeys: string[]) => void;
    openKeys: string[];
    isScroll: boolean;
    changeIsScroll: (isScroll: boolean) => void;
};

class DataSourceBoard extends Component<propTypes> {

    render() {
        const {height, width, leftMenus, route, changeOpenKeys, openKeys, isScroll, changeIsScroll} = this.props;
        return (
            <div className={'data-source'} style={{height, width}}>
                <LeftMenu {...{height, width, leftMenus, route, changeOpenKeys, openKeys, isScroll, changeIsScroll}} />
                <MainBoard {...{height, width, isScroll, route, leftMenus}}/>
            </div>);
    }
}
export default DataSourceBoard;
