import React, { Component } from 'react';
import {Form, Row, Col, Input, Radio, TimePicker } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
type propTypes = {
    form: any;
};
const formItemLayoutArea = {
    labelCol: {
        xs: {
            span: 3,
        },
    },
    wrapperCol: {
        xs: {
            span: 6,
        },
    },
};
class ConfigForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    changeDialog = (isDialog: boolean) => {
        this.setState({isDialog});
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form>
                    <div className={'basis'} style={{height: 280}}>
                        <Row gutter={24}>
                            <Col span={24} className={'form-item'}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'执行频率'} >
                                    {getFieldDecorator('serverName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择执行频率',
                                            },
                                        ],
                                    })(<RadioGroup ><Radio value={'month'}>每月</Radio><Radio value={'week'}>每周</Radio><Radio value={'day'}>每天</Radio></RadioGroup>)}
                                </FormItem>
                            </Col>
                            <Col span={24} className={'form-item'}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'开始时间'} >
                                    {getFieldDecorator('start', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择开始时间',
                                            },
                                        ],
                                    })(<Row><Col span={20}><TimePicker format={'HH:mm'} style={{width: '100%'}} size={'small'} /></Col></Row>)}
                                </FormItem>
                            </Col>
                            <Col span={24} className={'form-item'}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'结束时间'} >
                                    {getFieldDecorator('end', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择结束时间',
                                            },
                                        ],
                                    })(<Row><Col span={20}><TimePicker format={'HH:mm'} style={{width: '100%'}} size={'small'} /></Col></Row>)}
                                </FormItem>
                            </Col>
                            <Col span={24} className={'form-item'}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'告警阈值'} >
                                    {getFieldDecorator('serverName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择执行频率',
                                            },
                                        ],
                                    })(<Row><Col span={20}><Input size={'small'} /></Col><Col span={4}>%</Col></Row>)}
                                </FormItem>
                            </Col>
                            <Col span={24} className={'form-item'}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'告警方式'} >
                                    {getFieldDecorator('serverName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择告警方式',
                                            },
                                        ],
                                    })(<RadioGroup ><Radio value={'mail'}>邮件</Radio><Radio value={'ip'}>IP</Radio></RadioGroup>)}
                                </FormItem>
                            </Col>
                            <Col span={24} className={'form-item'}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'告警目标'} >
                                    {getFieldDecorator('serverName', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择告警目标',
                                            },
                                        ],
                                    })(<Row><Col span={20}><Input size={'small'} /></Col></Row>)}
                                </FormItem>
                            </Col>
                            <span style={{color: 'red', marginLeft: 50}}>说明:统计当天没有执行完成，隔天继续</span>
                        </Row>
                    </div>
                </Form>
            </div>

        );
    }
}
export default ConfigForm;
