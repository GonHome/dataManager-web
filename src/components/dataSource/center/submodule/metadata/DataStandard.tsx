import React, { Component } from 'react';
import { Tree, Table, Pagination, Select } from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import DataStandardDialog from '../../../dialog/metadata/DataStandardDialog';
import DataStandardTreeDialog from '../../../dialog/metadata/DataStandardTreeDialog';
const { TreeNode } = Tree;
const Option = Select.Option;
type propTypes = {
    height: number;
    width: number;
    isAction: boolean;
    changeSelectedKeys: (selectedRowKeys: string[]) => void;
    selectedRowKeys: string[];
};
type stateTypes = {
    isDialog: boolean;
    isTreeDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
    status: string;
};
class DataStandard extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, isTreeDialog: false, details: null, isEditable: true, title: '', status: '1'};
    }
    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };
    changeTreeDialog = (isTreeDialog: boolean) => {
        this.setState({isTreeDialog});
    };
    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, isTreeDialog, details, isEditable, title, status} = this.state;
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
            width: '10%',
        }, {
            title: '数据规范中文名称',
            dataIndex: 'chineseName',
            width: '25%',
        }, {
            title: '数据规范英文名称',
            dataIndex: 'name',
            width: '25%',
        }, {
            title: '发布单位',
            dataIndex: 'unit',
            width: '15%',
        }, {
            title: '映射状态',
            dataIndex: 'status',
            width: '10%',
        }];
        if (!isAction) {
            columns.push({title: '操作', dataIndex: 'action', width: '15%'});
        } else {
            columns[1].width = '30%';
            columns[2].width = '30%';
            columns[3].width = '20%';
        }
        const data = [{
            key: '1',
            id: '1',
            chineseName: '常口',
            name: 'ck',
            unit: '市局',
            status: '100%',
        }, {
            key: '2',
            id: '2',
            chineseName: '暂口',
            name: 'zk',
            unit: '市局',
            status: '100%',
        }, {
            key: '3',
            id: '3',
            chineseName: '逃犯',
            name: 'tf',
            unit: '市局',
            status: '100%',
        }];
        return (
            <div className={'module'}>
                <div className={'sub-tree'}>
                    <div title={'数据规范目录'} className={'title'}>
                        数据规范目录
                        <Button style={{float: 'right'}} intent={Intent.PRIMARY} text={'管理'} small={true} onClick={() => this.changeTreeDialog(true)}/>
                    </div>
                    <Tree showLine={true}>
                        <TreeNode title="本地规范" key="0" >
                            <TreeNode title="disis规范" key="0-0" />
                        </TreeNode>
                        <TreeNode title="公安部规范" key="1" >
                            <TreeNode title="公安部数据项集V2.0规范" key="1-0" />
                        </TreeNode>
                        <TreeNode title="省级规范" key="2" />
                    </Tree>
                </div>
                <div className={'right-board'} style={isAction ? {height} : {height: height - 40}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <Select size={'small'} style={{width: 100}} value={status} onChange={(e) => this.setState({status: e})}>
                                <Option value={'1'}>全部</Option>
                                <Option value={'2'}>未映射</Option>
                                <Option value={'3'}>已映射</Option>
                            </Select>
                            &nbsp;&nbsp;
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入数据规范名称"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                    style={{marginTop: -3}}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'} style={isAction ? {display: 'none'} : {display: 'block'}}>
                                <Button intent={Intent.PRIMARY} text={'新增'} small={true} onClick={() => this.changeDialog(true, null, true, '新增规范')}/>&nbsp;
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} />
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <DataStandardDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                        {isTreeDialog ? <DataStandardTreeDialog {...{width}} changeDialog={this.changeTreeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default DataStandard;
