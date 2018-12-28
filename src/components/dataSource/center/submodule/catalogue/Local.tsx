import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent , ButtonGroup} from '@blueprintjs/core';
import MetadataDialog from '../../../dialog/standard/MetadataDialog';
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
};
class Local extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, details: null, isEditable: true, title: ''};
    }

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };

    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, details, isEditable, title} = this.state;
        const lockButton = (
            <Button
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        const columns = [{
            title: '资源名称',
            dataIndex: 'id',
            width: 150,
        }, {
            title: '资源英文名',
            dataIndex: 'name',
            width: 150,
        }, {
            title: '行业分类',
            dataIndex: 'ip',
            width: 150,
        }, {
            title: '业务分类',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '所属应用系统',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '要素分类',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '数据来源',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '数据获取方式',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '资源提供单位',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '更新周期',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '数据总量',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '数据增量',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '业务更新时间',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '本地入库时间',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '是否主表',
            dataIndex: 'hostType',
            width: 150,
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
        const onRow = (record: any) => {
            return {
              onDoubleClick: () => { alert(123); },
            };
        };
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'数据资源目录'} className={'title'}>数据资源目录</div>
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
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入表中文名或表英文名"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup style={{float: 'right'}}>
                                <Button text={'导出'} small={true} intent={Intent.PRIMARY}/>&nbsp;
                                <Button text={'取消挂接'} small={true} intent={Intent.PRIMARY}/>
                            </ButtonGroup>
                        </div>
                        <Table  rowSelection={{}} onRow={onRow} className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} scroll={{x: 2250}}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <MetadataDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Local;
