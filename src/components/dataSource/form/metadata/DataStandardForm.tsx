import React, { Component } from 'react';
import { Form, Row, Col, Input, Select , Button, Table} from 'antd';
import {ButtonGroup} from '@blueprintjs/core';
const FormItem = Form.Item;
type propTypes = {
    form: any;
};
type stateTypes = {
    serverName: string;
    computerName: string;
    macUrl: string;
    ipUrl: string;
    username: string;
    password: string;
    mainUse: string;
    system: string;
    contactUser: string;
    contact: string;
    cpuNum: number;
    cpuFrequency: string;
    diskNum: number;
    nucleusNum: number;
    memoryNum: number;
    hostType: string;
    remarks: string;
};
const formItemLayoutInput = {
    labelCol: {
        xs: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 15,
        },
    },
};
const formItemLayoutSelect = {
    labelCol: {
        xs: {
            span: 9,
        },
    },
    wrapperCol: {
        xs: {
            span: 15,
        },
    },
};
const formItemLayoutTextArea = {
    labelCol: {
        xs: {
            span: 0,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
    },
};
class DataStandardForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    columns = () => {
        return [{
            title: '排序',
            dataIndex: 'name',
            width: 70,
        }, {
            title: '序号',
            dataIndex: 'ip',
            width: 70,
        }, {
            title: '数据项编号',
            dataIndex: 'hostType',
            width: 200,
        }, {
            title: '数据项名称',
            dataIndex: 'mainUse',
            width: 120,
        }, {
            title: '数据项中文名称',
            dataIndex: 'status',
            width: 120,
        }, {
            title: '数据元',
            dataIndex: 'status',
            width: 120,
        }, {
            title: '字段类型',
            dataIndex: 'status',
            width: 120,
        }, {
            title: '字段长度',
            dataIndex: 'status',
            width: 70,
        }, {
            title: '多值分隔符',
            dataIndex: 'status',
            width: 70,
        }, {
            title: '日期格式',
            dataIndex: 'status',
            width: 120,
        }, {
            title: '是否代码',
            dataIndex: 'status',
            width: 70,
        }, {
            title: '操作',
            dataIndex: 'status',
            width: 70,
        }];
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                1.规范基本信息&nbsp;&nbsp;
                <Button size={'small'} type={'primary'}>引用其他规范</Button>
                <div className={'basis'} style={{height: 95}}>
                    <Row gutter={12}>
                        <Col span={6}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'规范名称'} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入规范名称',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'规范名称'}  />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={12}>
                        <Col span={4}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutSelect} label={'规范编号'} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                       {
                                            required: true,
                                            message: '请选择行业类别',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'行业类别'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutTextArea} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择公安业务分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'公安业务分类'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutTextArea} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据要素一级分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'数据要素一级分类'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutTextArea} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据要素二级分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'数据要素二级分类'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutTextArea} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据要素细目分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'数据要素细目分类'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={3}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutTextArea} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据要素属性分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'数据要素属性分类'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={5} style={{lineHeight: '39px'}}>
                            <Row>
                                <Col span={8}>
                                    <Button type={'primary'} size={'small'} >生成编号</Button>
                                </Col>
                                <Col span={16}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutTextArea} label={''} >
                                        {getFieldDecorator('serverName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请选择数据要素属性分类',
                                                },
                                            ],
                                        })(<Input size={'small'} placeholder={'规范编号(前4段)'} disabled={true}  />)
                                        }
                                    </FormItem>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                2.规范项
                <ButtonGroup style={{float: 'right'}}>
                    <Button size={'small'} type={'primary'}>增加一行</Button>&nbsp;
                    <Button size={'small'} type={'primary'}>引用表字段</Button>&nbsp;
                    <Button size={'small'} type={'primary'}>引用其他规范项</Button>&nbsp;
                    <Button size={'small'} type={'primary'}>批量删除</Button>&nbsp;
                </ButtonGroup>
                <Table style={{marginTop: 10}} size={'small'} columns={this.columns()} bordered={true}/>
            </Form>
        );
    }
}
export default DataStandardForm;
