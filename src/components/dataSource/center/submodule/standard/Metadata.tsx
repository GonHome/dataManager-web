import React, { Component } from 'react';
import { Tree, Table, Pagination } from 'antd';
import {InputGroup, Button, Intent, Icon} from '@blueprintjs/core';
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
class Metadata extends Component<propTypes, stateTypes> {
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
            title: '序号',
            dataIndex: 'id',
            width: '5%',
        }, {
            title: '数据对象英文名',
            dataIndex: 'name',
            width: '35%',
        }, {
            title: '数据对象中文名',
            dataIndex: 'ip',
            width: '35%',
        }, {
            title: '对标率',
            dataIndex: 'hostType',
            width: '20%',
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: '5%',
            render: (text: string, record: any) => (<span title={'详情'}><Icon onClick={() => this.changeDialog(true, null, false, '详情')} style={{cursor: 'pointer'}} icon={'search'} color={'#1f88d1'}/></span>),
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
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <MetadataDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Metadata;
