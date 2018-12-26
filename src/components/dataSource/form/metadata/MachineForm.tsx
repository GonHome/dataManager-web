import React, { Component } from 'react';
import { Form, Row, Col, Input, Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
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
            span: 3,
        },
    },
    wrapperCol: {
        xs: {
            span: 20,
        },
    },
};
class MachineForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                基本信息:
                <div className={'basis'}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'服务器名称'} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: '服务器名称需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请输入服务器名称',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入服务器名称'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'计算机全名'} >
                                {getFieldDecorator('computerName', {})(<Input size={'small'} placeholder={'请输入计算机全名'}  />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'MAC地址'} >
                                {getFieldDecorator('macUrl', {})(<Input size={'small'} placeholder={'例如:00-00-00-00-00'}  />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'IP地址'} >
                                {getFieldDecorator('ipUrl', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: 'IP地址需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请输入IP地址',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'例如:192.168.0.1'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'用户名'} >
                                {getFieldDecorator('username', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: '用户名需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请输入用户名',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入用户名'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'密码'} >
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: '密码需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请输入密码',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入密码'} type={'password'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'主要用途'} >
                                {getFieldDecorator('mainUse', {})(
                                    <Select size={'small'} placeholder={'请选择服务器用途'}>
                                        <Option value="1">数据库服务器</Option>
                                        <Option value="2">应用系统服务器</Option>
                                        <Option value="3">中间件服务器</Option>
                                        <Option value="4">FTP服务器</Option>
                                        <Option value="5">其他</Option>
                                    </Select>)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'操作系统'} >
                                {getFieldDecorator('system', {})(
                                    <Select size={'small'} placeholder={'请选择操作系统'}>
                                        <Option value="1">Window7</Option>
                                        <Option value="2">Window8</Option>
                                        <Option value="3">Window10</Option>
                                        <Option value="4">CentOS 6.5</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'联系人姓名'} >
                                {getFieldDecorator('contactUser', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: '联系人姓名需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请输入联系人姓名',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入联系人姓名'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'联系方式'} >
                                {getFieldDecorator('contact', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: '联系方式需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请输入联系方式',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入联系方式'}  />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                </div>
                硬件信息:
                <div className={'basis'}>
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'CPU数目'} >
                                {getFieldDecorator('cpuNum', {
                                    rules: [
                                        {
                                            type: 'number',
                                            message: 'CPU数目需为数字格式',
                                        },
                                    ],
                                })(<div><Input size={'small'} placeholder={'例如: 2'}  style={{width: 155}} />&nbsp;个</div>)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'CPU主频'} >
                                {getFieldDecorator('cpuFrequency', {})(<div><Input size={'small'} placeholder={'例如: 3.0'}  style={{width: 140}} />&nbsp;GHZ</div>)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'硬盘空间'} >
                                {getFieldDecorator('diskNum', {
                                    rules: [
                                        {
                                            type: 'number',
                                            message: '硬盘空间需为数字格式',
                                        },
                                    ],
                                })(<div><Input size={'small'} placeholder={'例如: 500'}  style={{width: 140}} />&nbsp;GB</div>)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'每个CPU核数'} >
                                {getFieldDecorator('nucleusNum', {
                                    rules: [
                                        {
                                            type: 'number',
                                            message: '每个CPU核数需为数字格式',
                                        },
                                    ],
                                })(<div><Input size={'small'} placeholder={'例如: 8'}  style={{width: 155}} />&nbsp;核</div>)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'内存空间'} >
                                {getFieldDecorator('memoryNum', {
                                    rules: [
                                        {
                                            type: 'number',
                                            message: '内存空间需为数字格式',
                                        },
                                    ],
                                })(<div><Input size={'small'} placeholder={'例如: 16'}  style={{width: 140}} />&nbsp;GB</div>)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'主机类型'} >
                                {getFieldDecorator('hostType', {
                                    rules: [
                                        {
                                            type: 'string',
                                            message: '主机类型需为字符串格式',
                                        }, {
                                            required: true,
                                            message: '请选择主机类型',
                                        },
                                    ],
                                })(
                                    <div style={{width: 140}}>
                                        <Select size={'small'} placeholder={'请选择主机类型'}>
                                            <Option value="1">物理机</Option>
                                            <Option value="2">虚拟机</Option>
                                            <Option value="3">云主机</Option>
                                            <Option value="4">其他</Option>
                                        </Select>
                                    </div>

                                )}
                            </FormItem>
                        </Col>
                        <Col span={24}>
                            <FormItem style={{marginBottom: 0, marginLeft: -8}} {...formItemLayoutTextArea} label={'备注说明'} >
                                {getFieldDecorator('hostType', {})(
                                    <TextArea rows={3} />
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}
export default MachineForm;
