import React, { Component } from 'react';
import {Modal, Button, Table, Row, Col} from 'antd';
import {ButtonGroup, Button as BlueButton, Intent, Icon} from '@blueprintjs/core';
import TblSqlDialog from './TblSqlDialog';
import TableEditDialog from './TableEditDialog';
import ColDialog from './ColDialog';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
type stateTypes = {
    isDialog: boolean;
    isSqlDialog: boolean;
    isColDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class TableInfoDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, isSqlDialog: false, isColDialog: false, details: null, isEditable: true, title: ''};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };
    changeSqlDialog = (isSqlDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isSqlDialog, details, isEditable, title});
    };
    changeColDialog = (isColDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isColDialog, details, isEditable, title});
    };
    render() {
        const {title, width, isEditable} = this.props;
        const {isDialog, isSqlDialog, isColDialog} = this.state;
        const columns = [{
            title: '数据表英文名',
            dataIndex: 'name',
            width: '30%',
        }, {
            title: '中文名称',
            dataIndex: 'chineseName',
            width: '30%',
        }, {
            title: '对象类型',
            dataIndex: 'type',
            width: '25%',
        }, {
            title: '操作',
            dataIndex: 'action',
            width: '15%',
            render: (text: string, record: any) => (
                <Row>
                    <Col span={8} title={'编辑'}>
                        <Icon onClick={() => this.changeDialog(true, null, true, '编辑')} style={{cursor: 'pointer'}} icon={'edit'} color={'#1f88d1'}/>
                    </Col>
                    <Col span={8} title={'生成SQL语句'}>
                        <Icon onClick={() => this.changeSqlDialog(true, null, false, '生成SQL语句')} style={{cursor: 'pointer'}} icon={'document-share'} color={'#1f88d1'}/>
                    </Col>
                    <Col span={8} title={'字段编辑'}>
                        <Icon onClick={() => this.changeColDialog(true, null, false, '字段编辑')} style={{cursor: 'pointer'}} icon={'highlight'} color={'#1f88d1'}/>
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
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 420}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={isEditable ? [
                    <Button size={'small'} key="submit" type="primary" >确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ] : false}
            >
                <div>
                    <span>
                        <span className={'label'} style={{color: '#007aff'}}>当前数据库名称:</span>测试库&nbsp;
                        <span className={'label'} style={{color: '#007aff'}}>创建人:</span>管理员&nbsp;
                        <span className={'label'} style={{color: '#007aff'}}>创建时间:</span>2018-12-28&nbsp;
                        <span className={'label'} style={{color: '#007aff'}}>创建表:</span>
                        <span style={{color: 'red'}}>1</span>张
                        <ButtonGroup style={{float: 'right'}}>
                            <BlueButton onClick={() => this.changeDialog(true, null, false, '表新增')} small={true} icon={'add-column-right'} intent={Intent.PRIMARY} text={'表新增'}/>&nbsp;
                            <BlueButton onClick={() => this.changeSqlDialog(true, null, false, '生成SQL语句')} small={true} icon={'document-share'} intent={Intent.PRIMARY} text={'生成SQL'}/>&nbsp;
                            <BlueButton small={true} icon={'trash'} intent={Intent.PRIMARY} text={'删除'}/>
                        </ButtonGroup>
                    </span>
                    <Table style={{marginTop: 10}} size={'small'} rowSelection={{}} columns={columns} bordered={true} dataSource={data}/>
                    {isSqlDialog ? <TblSqlDialog {...{width}} details={this.state.details} title={this.state.title} isEditable={this.state.isEditable} changeDialog={this.changeSqlDialog} /> : null}
                    {isDialog ? <TableEditDialog {...{width}} details={this.state.details} title={this.state.title} isEditable={this.state.isEditable} changeDialog={this.changeDialog} /> : null}
                    {isColDialog ? <ColDialog {...{width}} details={this.state.details} title={this.state.title} isEditable={this.state.isEditable} changeDialog={this.changeColDialog} /> : null}
                </div>
            </Modal>
        );
    }
}
export default TableInfoDialog;
