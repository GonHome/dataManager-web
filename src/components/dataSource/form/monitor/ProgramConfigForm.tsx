import React, { Component } from 'react';
import {Form, Row, Col, Input, Radio, TimePicker, InputNumber} from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
type propTypes = {
    form: any;
};
type stateTypes = {
    rate: string;
};
const formItemLayoutArea = {
    labelCol: {
        xs: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 12,
        },
    },
};
class ProgramConfigForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {rate: 'month'};
    }
    showRunDate = () => {
        const {rate} = this.state;
        if (rate === 'month') {
            return <span><InputNumber size={'small'} defaultValue={1} min={1} max={31}/>日</span>;
        } else if (rate === 'week') {
            return <span><InputNumber size={'small'} defaultValue={1} min={1} max={7}/>星期</span>;
        } else {
            return <Input size={'small'} disabled={true} style={{display: 'none'}} />;
        }
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const {rate} = this.state;
        return (
            <div>
                <Form>
                    <Row gutter={24}>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'执行频率'} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入方案名',
                                        },
                                    ],
                                })(
                                    <RadioGroup value={rate} onChange={(e) => this.setState({rate: e.target.value})}>
                                        <Radio value={'month'}>每月</Radio>
                                        <Radio value={'week'}>每周</Radio>
                                        <Radio value={'day'}>每日</Radio>
                                    </RadioGroup>)}
                            </FormItem>
                        </Col>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'执行日期'} >
                                {getFieldDecorator('end', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择执行日期',
                                        },
                                    ],
                                })(this.showRunDate())}
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
                                })(<TimePicker style={{width: '100%'}} size={'small'} format={'HH:mm'}/>)}
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
                                })(<TimePicker style={{width: '100%'}} size={'small'} format={'HH:mm'}/>)}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}
export default ProgramConfigForm;
