import React, { Component } from 'react';
import {Table, Pagination, Row, Col, Select } from 'antd';
import {InputGroup, Button, Intent, Icon} from '@blueprintjs/core';
import AssessmentDialog from '../../../dialog/quality/AssessmentDialog';
import AssessmentLogDialog from '../../../dialog/quality/AssessmentLogDialog';
import AssessmentResDialog from '../../../dialog/quality/AssessmentResDialog';
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
class Assessment extends Component<propTypes, stateTypes> {
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
    changeResDialog = (isResDialog: boolean, details: any, isEditable: boolean, title: string) => {
        this.setState({isResDialog, details, isEditable, title});
    };
    render() {
        const {height, isAction, width} = this.props;
        const {isDialog, isLogDialog, isResDialog, details, isEditable, title} = this.state;
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
            title: '资源中文名',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '资源名',
            dataIndex: 'ip',
            width: '15%',
        }, {
            title: '数据源',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '预定抽样数',
            dataIndex: 'mainUse',
            width: '15%',
        }, {
            title: '状态',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '评估时间',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: '10%',
            render: (text: string, record: any) => (
                <Row>
                    <Col span={8} title={'执行'}>
                        <Button icon={<Icon icon={'play'} color={'#1f88d1'}/>}  minimal={true} small={true}/>
                    </Col>
                    <Col span={8} title={'配置'}>
                        <Button icon={<Icon icon={'cog'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeDialog(true, null , false, '')}/>
                    </Col>
                    <Col span={8} title={'结果'}>
                        <Button icon={<Icon icon={'applications'} color={'#1f88d1'}/>} minimal={true} small={true} onClick={() => this.changeResDialog(true, null , false, '')}/>
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
                            评估状态:&nbsp;&nbsp;
                            <Select size={'small'} style={{width: 100}}>
                                <Option value={'all'}>全部</Option>
                                <Option value={'1'}>正在评估</Option>
                                <Option value={'2'}>评估成功</Option>
                                <Option value={'3'}>评估失败</Option>
                                <Option value={'4'}>执行取消</Option>
                            </Select>&nbsp;&nbsp;
                            <div  className={'input-bar'} style={{position: 'absolute', marginTop: -1}}>
                                <InputGroup
                                    placeholder="请输入资源中文名"
                                    rightElement={lockButton}
                                    small={true}
                                    type={'text'}
                                />
                            </div>
                            <Button style={{float: 'right'}} small={true} intent={Intent.PRIMARY} text={'日志'} icon={'application'} onClick={() => this.changeLogDialog(true, null , false, '')}/>
                        </div>
                        <Table className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true}/>
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                        {isDialog ? <AssessmentDialog {...{details, isEditable, title, width}} changeDialog={this.changeDialog} /> : null}
                        {isLogDialog ? <AssessmentLogDialog {...{details, isEditable, title, width}} changeDialog={this.changeLogDialog} /> : null}
                        {isResDialog ? <AssessmentResDialog {...{details, isEditable, title, width}} changeDialog={this.changeResDialog} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}
export default Assessment;
