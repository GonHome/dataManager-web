import React, { Component } from 'react';
import {Table, Pagination} from 'antd';
import {InputGroup, Button, Intent, ButtonGroup} from '@blueprintjs/core';
import ApplyDialog from '../../../dialog/catalogue/ApplyDialog';
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
class Apply extends Component<propTypes, stateTypes> {
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
            title: '申请单名称',
            dataIndex: 'id',
            width: '15%',
        }, {
            title: '申请人',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '申请单位',
            dataIndex: 'ip',
            width: '15%',
        }, {
            title: '申请时间',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '联系方式',
            dataIndex: 'mainUse',
            width: '15%',
        }, {
            title: '审批状态',
            dataIndex: 'mainUse',
            width: '15%',
        }, {
            title: '操作',
            dataIndex: 'mainUse',
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
        return (
            <div className={'module'}>
                <div className={'right-board'} style={isAction ? {height, marginLeft: 0, width: 'calc(100% - 10px)'} : {height: height - 40, marginLeft: 0, width: 'calc(100% - 10px)'}}>
                    <div className={'back-white'}>
                        <div className={'action-bar'}>
                            <div  className={'input-bar'}>
                                <InputGroup
                                    placeholder="请输入数据元中文名称/内部标识符"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <ButtonGroup className={'button-bar'} style={isAction ? {display: 'none'} : {display: 'block'}}>
                                <Button icon={'saved'} intent={Intent.PRIMARY} text={'我的申请单'} small={true} />&nbsp;
                                <Button icon={'document'} text={'待审批'} small={true}/>&nbsp;&nbsp;&nbsp;
                                <Button icon={'document-open'} intent={Intent.PRIMARY} text={'申请数据'} small={true} onClick={() => this.changeDialog(true, null, true, '申请')}/>
                            </ButtonGroup>
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <ApplyDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Apply;
