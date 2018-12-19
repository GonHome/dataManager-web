import React, { Component } from 'react';
import LeftMenu from './left/LeftMenu';
import * as dataSource from '../../models/dataSource';
import {routeTypes} from '../../reducers/router';
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

class DataSourceBoard extends Component<propTypes> {

    render() {
        const {height, width} = this.props;
        return (
            <div className={'data-source'} style={{height, width}}>
                <LeftMenu {...this.props} />
            </div>);
    }
}
export default DataSourceBoard;
