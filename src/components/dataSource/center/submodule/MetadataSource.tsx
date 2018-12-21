import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import DataSourceDialog from '../../dialog/metadata/DataSourceDialog';
const { TreeNode } = Tree;
type propTypes = {
    height: number;
};
type stateTypes = {
    selectedRowKeys: string[];
    isDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class MetadataSource extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedRowKeys: [], isDialog: false, details: null, isEditable: true, title: ''};
    }

    onSelectChange = (selectedRowKeys: string[]) => {
        this.setState({selectedRowKeys});
    };

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };

    render() {
        const {height} = this.props;
        const {selectedRowKeys, isDialog, details, isEditable, title} = this.state;
        const rowSelection = {selectedRowKeys, onChange: this.onSelectChange};
        const lockButton = (
            <Button
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        const columns = [{
            title: '数据源名称',
            dataIndex: 'name',
            width: 250,
        }, {
            title: '数据源类型',
            dataIndex: 'sourceType',
            width: 150,
        }, {
            title: '主机IP',
            dataIndex: 'ip',
            width: 200,
        }, {
            title: '实例名',
            dataIndex: 'sid',
            width: 150,
        }, {
            title: '注册时间',
            dataIndex: 'createTime',
            width: 150,
        }, {
            title: '连接状态',
            dataIndex: 'status',
            width: 100,
        }, {
            title: '操作',
            dataIndex: 'action',
            width: 250,
        }];
        const data = [{
            key: '1',
            name: '库1',
            sourceType: 'oracle',
            ip: 32,
            sid: 'orcl',
            createTime: '2018-12-21',
        }];
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'数据源分类目录'} className={'title'}>数据源分类目录</div>
                    <Tree showLine={true}>
                        <TreeNode title="来源库" key="0" />
                        <TreeNode title="资源库" key="1" >
                            <TreeNode title="汇集库" key="1-0" />
                            <TreeNode title="标准库" key="1-1" />
                        </TreeNode>
                        <TreeNode title="未分类" key="2" />
                    </Tree>
                </div>
                <div className={'right-board'} style={{height: height - 40}}>
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
                            <ButtonGroup className={'button-bar'}>
                                <Button intent={Intent.PRIMARY} text={'注册'} small={true} onClick={() => this.changeDialog(true, null, true, '注册')}/>&nbsp;
                                <Button intent={Intent.PRIMARY} text={'连接测试'} small={true}/>&nbsp;
                                <Button intent={Intent.PRIMARY} text={'删除'} small={true}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} size="small" bordered={true} scroll={{x: 1250}} />
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <DataSourceDialog {...{details, isEditable, title}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default MetadataSource;
