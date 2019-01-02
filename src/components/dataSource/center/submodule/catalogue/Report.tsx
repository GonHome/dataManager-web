import React, { Component } from 'react';
import { Tree, Table, Pagination, Select } from 'antd';
import {InputGroup, Button, Intent , ButtonGroup} from '@blueprintjs/core';
import LocalDialog from '../../../dialog/catalogue/LocalDialog';
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
};
class Report extends Component<propTypes, stateTypes> {
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
            title: '业务分类',
            dataIndex: 'id',
            width: '10%',
        }, {
            title: '所属目录编号',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '所属目录对象名称',
            dataIndex: 'ip',
            width: '15%',
        }, {
            title: '数据资源编号',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '数据资源名称',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '资源提供单位',
            dataIndex: 'hostType',
            width: '10%',
        }, {
            title: '资源事权单位',
            dataIndex: 'hostType',
            width: '10%',
        }, {
            title: '操作',
            dataIndex: 'hostType',
            width: '10%',
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
                onDoubleClick: () => { this.changeDialog(true, null, false, '详情'); },
            };
        };
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'数据资源目录'} className={'title'}>
                        <Select size={'small'} style={{width: '100%'}}>
                            <Option value={'1'}>扩张数据项集</Option>
                            <Option value={'2'}>公安数据资源目录V2.0</Option>
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
                            <div  className={'input-bar'} style={{width: 300}}>
                                <InputGroup
                                    placeholder="请输入所属目录对象名称或数据资源名称"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup style={{float: 'right'}}>
                                <span style={{color: 'red'}}>提示:请生成编号后再进行导出上报操作!</span>&nbsp;
                                <Button icon={'refresh'} text={'生成编号'} small={true} intent={Intent.PRIMARY}/>&nbsp;
                                <Button icon={'cloud-upload'} text={'全量导出上报'} small={true} intent={Intent.PRIMARY}/>
                            </ButtonGroup>
                        </div>
                        <Table onRow={onRow} className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <LocalDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Report;
