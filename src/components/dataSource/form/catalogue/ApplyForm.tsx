import React, { Component } from 'react';
import {Form, Row, Col, Input, Table} from 'antd';
import {Button, Intent, Icon} from '@blueprintjs/core';
import ApplyDataDialog from '../../dialog/catalogue/ApplyDataDialog';
const FormItem = Form.Item;
const { TextArea } = Input;
type propTypes = {
    form: any;
    width: number;
};
type stateTypes = {
    isDialog: boolean;
};
const formItemLayoutInput = {
    labelCol: {
        xs: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 16,
        },
    },
};
const formItemLayoutArea = {
    labelCol: {
        xs: {
            span: 3,
        },
    },
    wrapperCol: {
        xs: {
            span: 20,
        },
    },
};
const columns = [{
    title: '序号',
    dataIndex: 'id',
    width: '15%',
}, {
    title: '数据对象名称',
    dataIndex: 'name',
    width: '25%',
}, {
    title: '用途',
    dataIndex: 'ip',
    width: '25%',
    render: (text: string, record: any) => (<Input size={'small'} placeholder={'请填写用途'}/>),
}, {
    title: '范围(地域/时间)',
    dataIndex: 'hostType',
    width: '25%',
    render: (text: string, record: any) => (<Input size={'small'} placeholder={'请填写范围'}/>),
}, {
    title: '操作',
    dataIndex: 'mainUse',
    width: '10%',
    render: (text: string, record: any) => (<Icon title={'删除'} icon={'trash'} style={{color: '#0096ff', cursor: 'pointer'}}/>),
}];
const data = [{}];
class ApplyForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false};
    }
    changeDialog = (isDialog: boolean) => {
        this.setState({isDialog});
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const {width} = this.props;
        const {isDialog} = this.state;
        return (
            <div>
                <Form>
                    <div className={'basis'} style={{height: 420}}>
                        <span className={'label'}>基本信息:</span>
                        <div className={'basis'} style={{height: 135}}>
                            <Row gutter={24}>
                                <Col span={24} className={'form-item'}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'申请单名称'} >
                                        {getFieldDecorator('serverName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入申请单名称',
                                                },
                                            ],
                                        })(<Input size={'small'} placeholder={'请输入申请单名称'}  />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={12} className={'form-item'}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'申请人'} >
                                        {getFieldDecorator('serverName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入申请人',
                                                },
                                            ],
                                        })(<Input size={'small'} placeholder={'请输入申请人'} disabled={true} />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={12} className={'form-item'}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'申请单位'} >
                                        {getFieldDecorator('serverName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入申请单位',
                                                },
                                            ],
                                        })(<Input size={'small'} placeholder={'请输入申请单位'} disabled={true} />)
                                        }
                                    </FormItem>
                                </Col>
                                <Col span={12} className={'form-item'}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'联系方式'} >
                                        {getFieldDecorator('serverName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请输入联系方式',
                                                },
                                            ],
                                        })(<Input size={'small'} placeholder={'请输入联系方式'} disabled={true} />)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </div>
                        <span className={'label'}>申请数据对象:</span>
                        <Button small={true} intent={Intent.PRIMARY} text={'新增对象'} style={{float: 'right'}} onClick={() => this.changeDialog(true)}/>
                        <div className={'basis'} style={{height: 135, marginTop: 10}}>
                            <Table size={'small'} bordered={true} pagination={false} columns={columns} dataSource={data}/>
                        </div>
                        <span className={'label'}>申请意见:</span>
                        <TextArea  rows={3}  />
                    </div>
                </Form>
                {isDialog ? <ApplyDataDialog width={width} changeDialog={this.changeDialog} /> : null}
            </div>

        );
    }
}
export default ApplyForm;
