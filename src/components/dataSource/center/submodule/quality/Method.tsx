import React, { Component } from 'react';
import {Table, Pagination, Row, Col, Select } from 'antd';
import {InputGroup, Button, Intent, Icon} from '@blueprintjs/core';
import MethodDialog from '../../../dialog/quality/MethodDialog';
import AssessmentLogDialog from '../../../dialog/quality/AssessmentLogDialog';
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
    isLogDialog: boolean;
    isResDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class Method extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, isLogDialog: false, isResDialog: false, details: null, isEditable: true, title: ''};
    }

    changeDialog = (isDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isDialog, details, isEditable, title});
    };
    changeLogDialog = (isLogDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isLogDialog, details, isEditable, title});
    };
    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, isLogDialog, details, isEditable, title} = this.state;
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
            title: '校验方法名称',
            dataIndex: 'name',
            width: '25%',
        }, {
            title: '方法类型',
            dataIndex: 'ip',
            width: '20%',
        }, {
            title: '预定义方法',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '创建时间',
            dataIndex: 'mainUse',
            width: '20%',
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: '15%',
            render: (text: string, record: any) => (
                <Row>
                    <Col span={8} title={'详情'}>
                        <Button icon={<Icon icon={'application'} color={'#1f88d1'}/>}  minimal={true} small={true} onClick={() => this.changeDialog(true, null , false, '')}/>
                    </Col>
                    <Col span={8} title={'检测'}>
                        <Button icon={<Icon icon={'console'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeDialog(true, null , false, '')}/>
                    </Col>
                    <Col span={8} title={'删除'}>
                        <Button icon={<Icon icon={'trash'} color={'#1f88d1'}/>} minimal={true} small={true} />
                    </Col>
                </Row>),
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
                            方法类型:&nbsp;&nbsp;
                            <Select size={'small'} style={{width: 150}}>
                                <Option value={'all'}>全部</Option>
                                <Option value={'0'}>空值校验</Option>
                                <Option value={'1'}>格式校验</Option>
                                <Option value={'2'}>范围校验</Option>
                                <Option value={'3'}>长度校验</Option>
                                <Option value={'4'}>字段间逻辑校验</Option>
                                <Option value={'5'}>代码校验</Option>
                                <Option value={'6'}>唯一性校验</Option>
                                <Option value={'7'}>表间一致性校验</Option>
                                <Option value={'8'}>引用完整性校验</Option>
                                <Option value={'9'}>其他</Option>
                            </Select>&nbsp;&nbsp;
                            <div  className={'input-bar'} style={{position: 'absolute', marginTop: -1}}>
                                <InputGroup
                                    placeholder="请输入校验方法名称"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <Button style={{float: 'right'}} small={true} intent={Intent.PRIMARY} text={'删除'} icon={'trash'} />
                        </div>
                        <Table rowSelection={{}} className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <MethodDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                        {isLogDialog ? <AssessmentLogDialog {...{details, isEditable, title, width}} changeDialog={this.changeLogDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Method;
