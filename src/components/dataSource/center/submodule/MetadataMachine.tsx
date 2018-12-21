import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import MetadataMachineDialog from '../../dialog/MetadataMachineDialog';
const { TreeNode } = Tree;
type propTypes = {
    height: number;
};
type stateTypes = {
    selectedRowKeys: string[];
    isRegister: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class MetadataMachine extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedRowKeys: [], isRegister: false, details: null, isEditable: true, title: ''};
    }

    onSelectChange = (selectedRowKeys: string[]) => {
        this.setState({selectedRowKeys});
    };

    changeRegister = (isRegister: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isRegister, details, isEditable, title});
    };

    render() {
        const {height} = this.props;
        const {selectedRowKeys, isRegister, details, isEditable, title} = this.state;
        const rowSelection = {selectedRowKeys, onChange: this.onSelectChange};
        const lockButton = (
            <Button
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        const columns = [{
            title: '服务器名称',
            dataIndex: 'name',
            width: '20%',
        }, {
            title: 'IP地址',
            dataIndex: 'ip',
            width: '15%',
        }, {
            title: '主机类型',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '主要用途',
            dataIndex: 'mainUse',
            width: '15%',
        }, {
            title: '当前状态',
            dataIndex: 'status',
            width: '15%',
        }, {
            title: '操作',
            dataIndex: 'action',
            width: '20%',
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
                <div className={'sub-tree'}>
                    <div title={'服务器目录'} className={'title'}>服务器目录</div>
                    <Tree showLine={true}>
                        <TreeNode title="数据库服务器" key="0-0-0" />
                        <TreeNode title="应用服务器" key="0-0-1" />
                        <TreeNode title="FTP服务器" key="0-0-2" />
                        <TreeNode title="未分类" key="0-0-3" />
                    </Tree>
                </div>
                <div className={'right-board'} style={{height: height - 40}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入服务器名称"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'}>
                                <Button intent={Intent.PRIMARY} text={'注册'} small={true} onClick={() => this.changeRegister(true, null, true, '注册')}/>&nbsp;
                                <Button intent={Intent.PRIMARY} text={'连接测试'} small={true}/>&nbsp;
                                <Button intent={Intent.PRIMARY} text={'删除'} small={true}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} size="small" bordered={true} />
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isRegister ? <MetadataMachineDialog {...{details, isEditable, title}} changeRegister={this.changeRegister} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default MetadataMachine;
