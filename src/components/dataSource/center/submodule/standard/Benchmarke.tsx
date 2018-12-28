import React, { Component } from 'react';
import { Tree, Table, Pagination, Select } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import MachineDialog from '../../../dialog/metadata/MachineDialog';
const Option = Select.Option;
const { TreeNode } = Tree;
type propTypes = {
    height: number;
    width: number;
    isAction: boolean;
    changeSelectedKeys: (selectedRowKeys: string[]) => void;
    selectedRowKeys: string[];
};
type stateTypes = {
    isDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
    status: string;
};
class Benchmarke extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, details: null, isEditable: true, title: '', status: '1'};
    }

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };

    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, details, isEditable, title, status} = this.state;
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
            title: '表中文名',
            dataIndex: 'name',
            width: 200,
        }, {
            title: '表英文名',
            dataIndex: 'ip',
            width: 150,
        }, {
            title: '数据顶个数',
            dataIndex: 'hostType',
            width: 100,
        }, {
            title: '对标',
            dataIndex: 'mainUse',
            width: 100,
        }, {
            title: '已对标',
            dataIndex: 'status',
            width: 70,
        }, {
            title: '已确认',
            dataIndex: 'status',
            width: 70,
        }, {
            title: '未对标',
            dataIndex: 'status',
            width: 70,
        }, {
            title: '使用同义词',
            dataIndex: 'status',
            width: 100,
        }, {
            title: '使用限定词',
            dataIndex: 'status',
            width: 100,
        }, {
            title: '使用数据元',
            dataIndex: 'status',
            width: 100,
        }, {
            title: '生成视图',
            dataIndex: 'status',
            width: 100,
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
                    <div title={'对标目录'} className={'title'} style={{borderBottom: '1px solid #c0c2c3', height: 34}}>对标目录
                        <Select size={'small'} style={{width: 100, marginLeft: 20}}>
                            <Option value={'1'}>本地</Option>
                            <Option value={'2'}>来源</Option>
                        </Select>
                    </div>
                    <div style={{padding: '10px 0', width: '100%', borderBottom: '1px dashed #c0c2c3'}}>
                        <Select size={'small'} style={{width: '100%'}}>
                            <Option value={'1'}>按应用系统展现目录</Option>
                            <Option value={'2'}>按应用展现对标目录</Option>
                            <Option value={'3'}>按业务展现目录</Option>
                            <Option value={'4'}>按要素展现目录</Option>
                            <Option value={'5'}>按库类型展现目录</Option>
                        </Select>
                    </div>
                    <Tree showLine={true}>
                        <TreeNode title="数据库服务器" key="0-0-0" />
                        <TreeNode title="应用服务器" key="0-0-1" />
                        <TreeNode title="FTP服务器" key="0-0-2" />
                        <TreeNode title="未分类" key="0-0-3" />
                    </Tree>
                </div>
                <div className={'right-board'} style={isAction ? {height} : {height: height - 40}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <Select size={'small'} style={{width: 100, position: 'absolute', marginTop: 2}} value={status} onChange={(e) => this.setState({status: e})}>
                                <Option value={'1'}>全部</Option>
                                <Option value={'2'}>已对标</Option>
                                <Option value={'3'}>未对标</Option>
                            </Select>
                            &nbsp;&nbsp;
                            <div  className={'input-bar'} style={{marginLeft: 110}}>
                                <InputGroup
                                    placeholder="请输入表中文名或表英文名"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'} style={isAction ? {display: 'none'} : {display: 'block'}}>
                                <Button icon={'timeline-bar-chart'} intent={Intent.PRIMARY} text={'数据标准化情况汇总'} small={true} onClick={() => this.changeDialog(true, null, true, '注册')}/>&nbsp;
                                <Button icon={'git-new-branch'} intent={Intent.PRIMARY} text={'开始对标'} small={true}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} scroll={{x: 1210}}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <MachineDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Benchmarke;
