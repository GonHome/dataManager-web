import React, { Component } from 'react';
import { Modal, Button, Table, Checkbox } from 'antd';
import {Button as BlueButton, Intent, ButtonGroup} from '@blueprintjs/core';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
type stateTypes = {
    isDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class ColDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, details: null, isEditable: true, title: ''};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title, width, isEditable} = this.props;
        const data = [{
            key: '1',
            name: '库1',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }];
        const columns = [{
            title: '标准数据项内部标识',
            dataIndex: 'id',
            width: '20%',
        }, {
            title: '标准数据项名称',
            dataIndex: 'name',
            width: '20%',
        }, {
            title: '标准数据项标识符',
            dataIndex: 'ip',
            width: '20%',
        }, {
            title: '是否主键',
            dataIndex: 'hostType',
            width: '10%',
            render: (text: string, record: any) => (<Checkbox />),
        }, {
            title: '是否非空',
            dataIndex: 'mainUse',
            width: '10%',
            render: (text: string, record: any) => (<Checkbox />),
        }, {
            title: '数据表现类型',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '数据类型',
            dataIndex: 'mainUse',
            width: '10%',
        }];
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 320}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={isEditable ? [
                    <Button size={'small'} key="submit" type="primary" >确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ] : false}
            >
                <div>
                    <span className={'label'} style={{color: '#007aff'}}>数据表名:</span>
                    <ButtonGroup style={{float: 'right'}}>
                        <BlueButton icon={'add-row-bottom'} text={'新增'} small={true} intent={Intent.PRIMARY}/>&nbsp;
                        <BlueButton icon={'trash'} text={'删除'} small={true} intent={Intent.PRIMARY} />
                    </ButtonGroup>
                    <Table rowSelection={{}} style={{marginTop: 10}} size={'small'} bordered={true} columns={columns} dataSource={data}/>
                </div>
            </Modal>
        );
    }
}
export default ColDialog;
