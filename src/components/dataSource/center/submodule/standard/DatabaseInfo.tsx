import React, { Component } from 'react';
import {Table, Pagination, Row, Col } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup, Icon} from '@blueprintjs/core';
import DatabaseInfoDialog from '../../../dialog/standard/DatabaseInfoDialog';
import DatabaseSqlDialog from '../../../dialog/standard/DatabaseSqlDialog';
import TableInfoDialog from '../../../dialog/standard/TableInfoDialog';
type propTypes = {
    height: number;
    width: number;
    isAction: boolean;
    changeSelectedKeys: (selectedRowKeys: string[]) => void;
    selectedRowKeys: string[];
};
type stateTypes = {
    isDialog: boolean;
    isSqlDialog: boolean;
    isTblDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class DatabaseInfo extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, isSqlDialog: false, isTblDialog: false, details: null, isEditable: true, title: ''};
    }

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };
    changeSqlDialog = (isSqlDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isSqlDialog, details, isEditable, title});
    };
    changeTblDialog = (isTblDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isTblDialog, details, isEditable, title});
    };
    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, isSqlDialog, isTblDialog, details, isEditable, title} = this.state;
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
            title: '数据库中文名称',
            dataIndex: 'name',
            width: '11%',
        }, {
            title: '数据库英文名',
            dataIndex: 'ip',
            width: '10%',
        }, {
            title: '创建日期',
            dataIndex: 'hostType',
            width: '10%',
        }, {
            title: '创建人',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '表数量',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '字段数量',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '使用标准数据项',
            dataIndex: 'mainUse',
            width: '12%',
        }, {
            title: '使用数据元',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: '12%',
            render: (text: string, record: any) => (
                <Row>
                    <Col span={6} title={'编辑'}>
                        <Icon onClick={() => this.changeDialog(true, null, true, '编辑')} style={{cursor: 'pointer'}} icon={'edit'} color={'#1f88d1'}/>
                    </Col>
                    <Col span={6} title={'生成SQL语句'}>
                        <Icon onClick={() => this.changeSqlDialog(true, null, false, '生成SQL语句')} style={{cursor: 'pointer'}} icon={'document-share'} color={'#1f88d1'}/>
                    </Col>
                    <Col span={6} title={'数据表编辑'}>
                        <Icon onClick={() => this.changeTblDialog(true, null, false, '数据表编辑')} style={{cursor: 'pointer'}} icon={'highlight'} color={'#1f88d1'}/>
                    </Col>
                    <Col span={6} title={'操作日志'}>
                        <Icon onClick={() => this.changeDialog(true, null, false, '操作日志')} style={{cursor: 'pointer'}} icon={'git-repo'} color={'#1f88d1'}/>
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
                                    placeholder="请输入数据元中文名称/内部标识符"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'} style={isAction ? {display: 'none'} : {display: 'block'}}>
                                <Button icon={'add-column-left'} intent={Intent.PRIMARY} text={'新增'} small={true} onClick={() => this.changeDialog(true, null, true, '注册')}/>&nbsp;
                                <Button icon={'trash'} intent={Intent.PRIMARY} text={'删除'} small={true}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table rowSelection={{}} className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <DatabaseInfoDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                        {isSqlDialog ? <DatabaseSqlDialog {...{details, isEditable, title, width}} changeDialog={this.changeSqlDialog} /> : null}
                        {isTblDialog ? <TableInfoDialog {...{details, isEditable, title, width}} changeDialog={this.changeTblDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default DatabaseInfo;
