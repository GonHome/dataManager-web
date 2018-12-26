import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import DataObjectDialog from '../../../dialog/metadata/DataObjectDialog';
const { TreeNode } = Tree;
type propTypes = {
    height: number;
    width: number;
    isAction: boolean;
    changeSelectedKeys: (selectedRowKeys: string[]) => void;
    selectedRowKeys: string[];
};
type stateTypes = {
    selectedRowKeys: string[];
    isDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class DataObject extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedRowKeys: [], isDialog: false, details: null, isEditable: true, title: ''};
    }

    componentDidMount() {
        const {isAction, selectedRowKeys} = this.props;
        if (isAction) {
            this.setState({selectedRowKeys});
        }
    }

    onSelectChange = (selectedRowKeys: string[]) => {
        const {isAction, changeSelectedKeys} = this.props;
        if (isAction) {
            changeSelectedKeys(selectedRowKeys);
        }
        this.setState({selectedRowKeys});
    };

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };

    render() {
        const {height, isAction, width} = this.props;
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
            title: '数据对象',
            dataIndex: 'tableName',
            width: 250,
        }, {
            title: '数据对象名称',
            dataIndex: 'name',
            width: 150,
        }, {
            title: '数据表用途',
            dataIndex: 'tableUse',
            width: 150,
        }, {
            title: '更新方式',
            dataIndex: 'updateType',
            width: 150,
        }, {
            title: '更新周期',
            dataIndex: 'updateCycle',
            width: 150,
        }, {
            title: '应用系统分类',
            dataIndex: 'systemType',
            width: 300,
        }];
        if (!isAction) {
            columns.push({title: '操作', dataIndex: 'action', width: 250 });
        }
        const data = [{
            key: '1',
            tableName: 'table1',
            name: '表1',
            tableUse: '业务表',
            updateType: '自动',
            updateCycle: '不定时更新',
            systemType: '无应用',
        }, {
            key: '2',
            tableName: 'table2',
            name: '表2',
            tableUse: '业务表',
            updateType: '自动',
            updateCycle: '不定时更新',
            systemType: '无应用',
        }, {
            key: '3',
            tableName: 'table3',
            name: '表3',
            tableUse: '业务表',
            updateType: '自动',
            updateCycle: '不定时更新',
            systemType: '无应用',
        }];
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'数据表分类目录'} className={'title'}>数据表分类目录</div>
                    <Tree showLine={true}>
                        <TreeNode title="代码库" key="0" />
                        <TreeNode title="资源库" key="1">
                            <TreeNode title="资源库A" key="1-0" />
                        </TreeNode>
                        <TreeNode title="标准库" key="2">
                            <TreeNode title="标准库4.46" key="2-0" />
                            <TreeNode title="标准库1.77" key="2-1" />
                        </TreeNode>
                        <TreeNode title="未分类" key="3" />
                    </Tree>
                </div>
                <div className={'right-board'} style={isAction ? {height} : {height: height - 40}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入数据对象"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'} style={isAction ? {display: 'none'} : {display: 'block'}}>
                                <Button intent={Intent.PRIMARY} text={'注册'} small={true} onClick={() => this.changeDialog(true, null, true, '注册数据对象')}/>&nbsp;
                                <Button intent={Intent.PRIMARY} text={'删除'} small={true}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} size="small" bordered={true} scroll={isAction ? {x: 1150} : {x: 1400}}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <DataObjectDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default DataObject;
