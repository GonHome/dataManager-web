import React, { Component } from 'react';
import {Button, Classes, Icon, ButtonGroup} from '@blueprintjs/core';
type propTypes = {
    height: number;
    width: number;
};

class DataSourceHead extends Component<propTypes> {

    render() {
        const {width, height} = this.props;
        return (
            <div style={{lineHeight: `${height}px`, height: height}} className={'data-nav'}>
                <div className={'head'} style={{width: width }} >
                    <div className={'left-menu'}>
                        <Button  style={{ height: height, width: 50 }} className={Classes.MINIMAL} icon={<Icon iconSize={20} color={'#fff'} icon={'graph'}/>}  />
                    </div>
                    <div>
                        <span className={'title'} >大数据资源管理系统</span>
                        <ButtonGroup className={'user-bar'}>
                            <Icon style={{marginTop: 17}} icon={'user'} color={'#fff'} />&nbsp;&nbsp;
                            <span>超级管理员</span>
                            <Button title={'监控平台'} style={{ height: 50, width: 50 }} className={Classes.MINIMAL} icon={<Icon iconSize={20} color={'#fff'} icon={'grouped-bar-chart'}/>}  />
                            <Button active={true} title={'管理中心'} style={{ height: 50, width: 50 }} className={Classes.MINIMAL} icon={<Icon iconSize={20} color={'#fff'} icon={'zoom-to-fit'}/>}  />
                            <Button title={'退出'} style={{ height: 50, width: 50 }} className={Classes.MINIMAL} icon={<Icon iconSize={20} color={'#fff'} icon={'log-out'}/>}  />
                        </ButtonGroup>
                    </div>
                </div>
            </div>);
    }
}
export default DataSourceHead;
