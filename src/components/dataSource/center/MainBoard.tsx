import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import zh_CN from '../../../../node_modules/antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import '../../../../node_modules/moment/locale/zh-cn';
import LocationLine from './LocationLine';
import {routeTypes} from '../../../reducers/router';
import * as dataSource from '../../../models/dataSource';
moment.locale('zh-cn');

type propTypes = {
    height: number;
    width: number;
    isScroll: boolean;
    route: routeTypes;
    leftMenus: dataSource.leftMenu[];
};

class MainBoard extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    // @ts-ignore
    showModule = (SubModule: any) => {
        const {height} = this.props;
        if (SubModule) {
            return  <LocaleProvider locale={zh_CN}><SubModule {...{height}} /></LocaleProvider>;
        } else {
            return <span>路径有误</span>;
        }
    };

    render() {
        const {height, width, isScroll, route, leftMenus} = this.props;
        const {path} = route.keys;
        let SubModule = null;
        leftMenus.map((menu) => {
            menu.children.map((item) => {
                if (path === item.path) {
                    SubModule = item.component;
                }
            });
        });
        return (
            <div className={'main-board'} style={isScroll ? {width: width, marginLeft: 0 } : {width: width - 185, marginLeft: 185}}>
                <LocationLine {...{route, leftMenus}} />
                <div className={'back-board'} style={{height: height - 40}}>
                    {this.showModule(SubModule)}
                </div>
            </div>
        );
    }
}
export default MainBoard;
