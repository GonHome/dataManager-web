import React, { Component } from 'react';
import {Menu, Icon} from 'antd';
import {Icon as BlueIcon} from '@blueprintjs/core';
import * as dataSource from '../../../models/dataSource';
import {routeTypes} from '../../../reducers/router';
const SubMenu = Menu.SubMenu;
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

class LeftMenu extends Component<propTypes> {

    showItem = (menus: dataSource.leftMenu[]) => menus.map((item) => {
        return <Menu.Item key={item.path}><span><Icon type={'file-text'} /><span title={item.name}>{item.name}</span></span></Menu.Item>;
    });
    componentDidMount() {
        const {route, changeOpenKeys} = this.props;
        const {path} = route.keys;
        const pathList = path.split('/');
        const openKeys = pathList[0];
        changeOpenKeys([openKeys]);
    }

    openChange = (nextOpenKeys: string[]) => {
        const {changeOpenKeys, openKeys} = this.props;
        nextOpenKeys = nextOpenKeys.filter((key) => {
            return key !== openKeys[0];
        });
        changeOpenKeys(nextOpenKeys);
    };

    // @ts-ignore
    selectChange = ({ item, key, selectedKeys }) => {
        window.location.href = `/dataSource/manage/${selectedKeys[0]}`;
    };

    render() {
        const {leftMenus, route, openKeys, height, changeIsScroll, isScroll} = this.props;
        const {path} = route.keys;
        const subMenus: JSX.Element[] = [];
        leftMenus.map((item, index) => {
            // @ts-ignore
            subMenus.push(<SubMenu key={item.path} title={<span><Icon type={'folder-open'} /><span title={item.name}>{item.name}</span></span>}>{this.showItem(item.children)}</SubMenu>);
        });
        return (
            <div className={'left'}>
                <Menu
                    mode="inline"
                    theme="dark"
                    openKeys={openKeys}
                    selectedKeys={[path]}
                    onSelect={this.selectChange}
                    onOpenChange={this.openChange}
                    className={isScroll ? 'left-menu disabled' : 'left-menu'}
                    style={isScroll ? {width: 0, visibility: 'hidden'} : {width: 185, visibility: 'visible'}}
                >
                    {subMenus}
                </Menu>
                <div style={isScroll ? {marginLeft: 0, top: height / 2} : {marginLeft: 185, top: height / 2}} onClick={() => changeIsScroll(!isScroll)} className={'scroll-bar bar-hover'}>
                    <BlueIcon className={'scroll-icon'} color={'#fff'} icon={isScroll ? 'caret-right' : 'caret-left'}/>
                </div>
            </div>);

    }
}
export default LeftMenu;
