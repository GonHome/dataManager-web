import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import InfoCodeDialog from '../../../dialog/metadata/InfoCodeDialog';
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
class InfoCode extends Component<propTypes, stateTypes> {
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
            title: '码表中文名称',
            dataIndex: 'chineseName',
            width: '15%',
        }, {
            title: '码表英文名称',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '注册时间',
            dataIndex: 'createTime',
            width: '25%',
        }, {
            title: '所属数据库',
            dataIndex: 'database',
            width: '15%',
        }, {
            title: '过滤条件',
            dataIndex: 'term',
            width: '15%',
        }];
        if (!isAction) {
            columns.push({title: '操作', dataIndex: 'action', width: '15%'});
        } else {
            columns[3].width = '20%';
            columns[4].width = '25%';
        }
        const data = [{
            key: '1',
            chineseName: '码表1',
            name: 'code1',
            createTime: '2018-12-25 16:12:12',
            database: 'ORACLE',
            term: '',
        }, {
            key: '2',
            chineseName: '码表2',
            name: 'code2',
            createTime: '2018-12-25 16:12:12',
            database: 'ORACLE',
            term: '',
        }, {
            key: '2',
            chineseName: '码表2',
            name: 'code2',
            createTime: '2018-12-25 16:12:12',
            database: 'ORACLE',
            term: '',
        }];
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'信息代码目录'} className={'title'}>信息代码目录</div>
                    <Tree showLine={true}>
                        <TreeNode title="默认节点" key="0" />
                        <TreeNode title="未分类" key="1" />
                    </Tree>
                </div>
                <div className={'right-board'} style={isAction ? {height} : {height: height - 40}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入码表中文名称"
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
                        {isDialog ? <InfoCodeDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default InfoCode;
