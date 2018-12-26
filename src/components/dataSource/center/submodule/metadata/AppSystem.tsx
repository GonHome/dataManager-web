import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import AppSystemDialog from '../../../dialog/metadata/AppSystemDialog';
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
class AppSystem extends Component<propTypes, stateTypes> {
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
            title: '应用系统名称',
            dataIndex: 'name',
            width: '20%',
        }, {
            title: '上线日期',
            dataIndex: 'onlineDate',
            width: '20%',
        }, {
            title: '数据库类型',
            dataIndex: 'databaseType',
            width: '20%',
        }, {
            title: '应用系统访问地址',
            dataIndex: 'visitUrl',
            width: '20%',
        }];
        if (isAction) {
            columns.map((column) => {
                column.width = '25%';
            });
        } else {
            columns.push({title: '操作', dataIndex: 'action', width: '20%'});
        }
        const data = [{
            key: '1',
            name: '测试',
            onlineDate: '2018-12-21',
            databaseType: '关系型数据库',
            visitUrl: '127.0.0.1',
        }];
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'应用系统目录'} className={'title'}>应用系统目录</div>
                    <Tree showLine={true}>
                        <TreeNode title="按数据来源分类" key="0" >
                            <TreeNode title="省级" key="0-0" />
                            <TreeNode title="市级" key="0-1" />
                        </TreeNode>
                        <TreeNode title="未分类" key="1" />
                    </Tree>
                </div>
                <div className={'right-board'} style={isAction ? {height: height - 22 } : {height: height - 40}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入应用系统名称"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'} style={isAction ? {display: 'none'} : {display: 'block'}}>
                                <Button intent={Intent.PRIMARY} text={'注册'} small={true} onClick={() => this.changeDialog(true, null, true, '注册')}/>&nbsp;
                                <Button intent={Intent.PRIMARY} text={'删除'} small={true}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} size="small" bordered={true} />
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <AppSystemDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default AppSystem;
