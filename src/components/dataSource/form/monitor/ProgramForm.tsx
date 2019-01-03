import React, { Component } from 'react';
import {Form, Row, Col, Input, Button } from 'antd';
const FormItem = Form.Item;
type propTypes = {
    form: any;
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
class ProgramForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form>
                    <Row gutter={24}>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'方案名'} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入方案名',
                                        },
                                    ],
                                })(<Input size={'small'}/>)}
                            </FormItem>
                        </Col>
                        <Row>
                            <Col span={3}/>
                            <span style={{fontWeight: 'bold'}}>校验对象A:</span>&nbsp;&nbsp;&nbsp;
                            <Button size={'small'} type={'primary'} icon={'plus'}>选择</Button>
                        </Row>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'数据源'} >
                                {getFieldDecorator('start', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据源',
                                        },
                                    ],
                                })(<Input size={'small'} disabled={true}/>)}
                            </FormItem>
                        </Col>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'数据对象'} >
                                {getFieldDecorator('end', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据对象',
                                        },
                                    ],
                                })(<Input size={'small'} disabled={true}/>)}
                            </FormItem>
                        </Col>
                        <Row>
                            <Col span={3}/>
                            <span style={{fontWeight: 'bold'}}>校验对象B:</span>&nbsp;&nbsp;&nbsp;
                            <Button size={'small'} type={'primary'} icon={'plus'}>选择</Button>
                        </Row>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'数据源'} >
                                {getFieldDecorator('start', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据源',
                                        },
                                    ],
                                })(<Input size={'small'} disabled={true}/>)}
                            </FormItem>
                        </Col>
                        <Col span={24} className={'form-item'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutArea} label={'数据对象'} >
                                {getFieldDecorator('end', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据对象',
                                        },
                                    ],
                                })(<Input size={'small'} disabled={true}/>)}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>

        );
    }
}
export default ProgramForm;
