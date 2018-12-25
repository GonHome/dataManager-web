import React, { Component } from 'react';
import { Form, Row, Col, Input, Select} from 'antd';
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
class AliyunForm extends Component<propTypes> {
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
                                <Select size={'small'} placeholder={'请选择版本'} />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'endpoint'} >
                            {getFieldDecorator('endpoint', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入endpoint',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'例如: oss-cn-hangzhou.aliyun.com'} />)
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
                            })(<Input size={'small'} placeholder={'请输入数据库名称'} />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'bucket'} >
                            {getFieldDecorator('bucket', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入bucket',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'请输入bucket'} />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'AccessId'} >
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入AccessId',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'访问所使用的AccessId'} />)}
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'AccessKey'} >
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: 'AccessKey',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'访问所使用的AccessKey'} />)}
                        </FormItem>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default AliyunForm;
