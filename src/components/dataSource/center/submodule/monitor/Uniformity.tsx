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
class Uniformity extends Component<propTypes, stateTypes> {
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
            width: 70,
        }, {
            title: '方案名称',
            dataIndex: 'name',
            width: 250,
        }, {
            title: '校验数据源A',
            dataIndex: 'ip',
            width: 150,
        }, {
            title: '体验数据对象A',
            dataIndex: 'hostType',
            width: 250,
        }, {
            title: '校验数据源B',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '校验数据对象B',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '调度方案',
            dataIndex: 'mainUse',
            width: 100,
        }, {
            title: '数据总量是否一致',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '上次总量差',
            dataIndex: 'mainUse',
            width: 100,
        }, {
            title: '上次执行状态',
            dataIndex: 'mainUse',
            width: 100,
        }, {
            title: '上次执行时间',
            dataIndex: 'mainUse',
            width: 200,
        }, {
            title: '任务执行状态',
            dataIndex: 'mainUse',
            width: 100,
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: 200,
            render: (text: string, record: any) => (
                <Row>
                    <Col span={6} title={'执行12'}>
                        <Button icon={<Icon icon={'play'} color={'#1f88d1'}/>}  minimal={true} small={true}/>
                    </Col>
                    <Col span={6} title={'修改'}>
                        <Button icon={<Icon icon={'edit'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeDialog(true, null , false, '')}/>
                    </Col>
                    <Col span={6} title={'日志'}>
                        <Button icon={<Icon icon={'application'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeTblDialog(true, null , false, '')}/>
                    </Col>
                    <Col span={6} title={'删除'}>
                        <Button icon={<Icon icon={'trash'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeTblDialog(true, null , false, '')}/>
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
                            <Button style={{float: 'right'}} icon={'plus'} text={'新增'} small={true} intent={Intent.PRIMARY}/>
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} scroll={{x: 1470}}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <TotalDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                        {isTblDialog ? <TotalTblDialog {...{details, isEditable, title, width}} changeDialog={this.changeTblDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Uniformity;
