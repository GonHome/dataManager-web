import React, { Component } from 'react';
import { Form, Row, Col, Input, Select} from 'antd';
const FormItem = Form.Item;
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
            span: 0,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
    },
};
// const formItemLayoutTextArea = {
//     labelCol: {
//         xs: {
//             span: 3,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 20,
//         },
//     },
// };
class InfoCodeForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                填写基础信息:
                <div className={'basis'} style={{height: 210, paddingLeft: 15}}>
                    <Row gutter={24}>
                        <Col span={3} className={'label-title'}>
                            码表信息:
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                       {
                                            required: true,
                                            message: '请输入码表中文名称',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入码表中文名称'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入码表英文名称',
                                        },
                                    ],
                                })(<Input size={'small'} placeholder={'请输入码表英文名称'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据源',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择数据源'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择库用户',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择库用户'}  />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={3} className={'label-title'}>
                            码值设置:
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据对象',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择数据对象'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择字段代码',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择字段代码'}  />)
                                }
                            </FormItem>
                        </Col>
                        <Col span={5}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择代码名称字段',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择代码名称字段'}  />)
                                }
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={3} className={'label-title'}>
                            过滤条件:
                        </Col>
                        <Col span={20}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {})(<Input size={'small'} placeholder={`请输入过滤条件,例如: name='name'`}/>)}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={3} className={'label-title'}>
                            备注说明:
                        </Col>
                        <Col span={20}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={''} >
                                {getFieldDecorator('serverName', {})(<TextArea rows={3} placeholder={'请输入备注说明'}/>)}
                            </FormItem>
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}
export default InfoCodeForm;
