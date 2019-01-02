import React, { Component } from 'react';
import {Table, Pagination, Row, Col } from 'antd';
import {InputGroup, Button, Intent, Icon} from '@blueprintjs/core';
import TotalDialog from '../../../dialog/monitor/TotalDialog';
import TotalTblDialog from '../../../dialog/monitor/TotalTblDialog';
type propTypes = {
    height: number;
    width: number;
    isAction: boolean;
    changeSelectedKeys: (selectedRowKeys: string[]) => void;
    selectedRowKeys: string[];
};
type stateTypes = {
    isDialog: boolean;
    isTblDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class Total extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, isTblDialog: false, details: null, isEditable: true, title: ''};
    }

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };
    changeTblDialog = (isTblDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isTblDialog, details, isEditable, title});
    };
    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, isTblDialog, details, isEditable, title} = this.state;
        const lockButton = (
            <Button
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        const columns = [{
            title: '序号',
            dataIndex: 'id',
            width: '5%',
        }, {
            title: '数据源名称',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '库类型',
            dataIndex: 'ip',
            width: '15%',
        }, {
            title: '统计计划',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '上次统计时间',
            dataIndex: 'mainUse',
            width: '15%',
        }, {
            title: '数据总量(条)',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '存储空间(MB)',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: '10%',
            render: (text: string, record: any) => (
                <Row>
                    <Col span={8} title={'执行'}>
                        <Button icon={<Icon icon={'play'} color={'#1f88d1'}/>}  minimal={true} small={true}/>
                    </Col>
                    <Col span={8} title={'配置'}>
                        <Button icon={<Icon icon={'cog'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeDialog(true, null , false, '')}/>
                    </Col>
                    <Col span={8} title={'日志'}>
                        <Button icon={<Icon icon={'application'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeTblDialog(true, null , false, '')}/>
                    </Col>
                </Row>),
        }];
        const data = [{
            key: '1',
            name: '库1',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }, {
            key: '2',
            name: '库2',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }, {
            key: '3',
            name: '库3',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }];
        return (
            <div className={'module'}>
                <div className={'right-board'} style={isAction ? {height, marginLeft: 0, width: 'calc(100% - 10px)'} : {height: height - 40, marginLeft: 0, width: 'calc(100% - 10px)'}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入数据源名称"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <TotalDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                        {isTblDialog ? <TotalTblDialog {...{details, isEditable, title, width}} changeDialog={this.changeTblDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Total;
