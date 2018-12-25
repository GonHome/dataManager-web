import React, { Component } from 'react';
import { Form, Row, Col, Input, Select} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
type propTypes = {
    getFieldDecorator: any;
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
class HBaseForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props;
        return (
            <div className={'basis'} style={{height: 130}}>
                <Row gutter={24}>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'版本'} >
                            {getFieldDecorator('edition', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择版本',
                                    },
                                ],
                            })(
                                <Select size={'small'} placeholder={'请选择版本'}>
                                    <Option value={'1'}>cdh1.0.0</Option>
                                    <Option value={'2'}>cdh1.2.0</Option>
                                    <Option value={'3'}>0.96.0</Option>
                                    <Option value={'4'}>0.94.0</Option>
                                    <Option value={'5'}>0.98.0</Option>
                                </Select>
                            )
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'IP地址'} >
                            {getFieldDecorator('IP', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入IP',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'例如: 192.168.0.1'} />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'ZooKeeper集群'} >
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择ZooKeeper集群',
                                    },
                                ],
                            })(<Select size={'small'} placeholder={'请选择ZooKeeper集群'} />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'端口号'} >
                            {getFieldDecorator('port', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入端口号',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'例如: 1521'} />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'数据库实例名'} >
                            {getFieldDecorator('sid', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入数据库实例名',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'请输入数据库实例名'} />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'数据库名称'} >
                            {getFieldDecorator('databaseName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入数据库名称',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'请输入数据库名称'} />)
                            }
                        </FormItem>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default HBaseForm;
