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
class ZookeeperForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props;
        return (
            <div className={'basis'} style={{height: 92}}>
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
                                    <Option value={'1'}>3.4.5</Option>
                                    <Option value={'2'}>cdh3.4.5</Option>
                                </Select>
                            )
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'集群名'} >
                            {getFieldDecorator('colonyName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入集群名',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'例如: 大数据集群'} />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'主节点IP地址'} >
                            {getFieldDecorator('mainNode', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入主节点IP地址',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'例如: 192.168.0.1'} />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'主节点端口号'} >
                            {getFieldDecorator('mainPort', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入主节点端口号',
                                    },
                                ],
                            })(<Input size={'small'} placeholder={'例如: 8080'} />)
                            }
                        </FormItem>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ZookeeperForm;
