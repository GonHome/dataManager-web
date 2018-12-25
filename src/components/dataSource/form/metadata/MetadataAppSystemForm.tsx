import React, { Component } from 'react';
import { Form, Row, Col, Input, Select} from 'antd';
import {Icon} from '@blueprintjs/core';
import MetadataMachineCheckDialog from '../../dialog/metadata/MachineCheckDialog';
const FormItem = Form.Item;
const Option = Select.Option;
type propTypes = {
    form: any;
};
type stateTypes = {
    selectedRowKeys: string[];
    isDialog: boolean;
    // appSystemName: string;
    // isUsed: number;
    // onlineDate: string;
    // offlineDate: string;
    // databaseType: string;
    // visitUrl: string;
    // appRemarks: string;
    // databaseRemarks: string;
    // authority: string;
    // authorityPhone: string;
    // authorityUser: number;
    // build: string;
    // buildPhone: number;
    // buildUser: number;
    // register: number;
    // registerPhone: string;
    // registerUser: string;
    // jobType: string;
    // businessType: string;
};
const formItemLayoutInput = {
    labelCol: {
        xs: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 16,
        },
    },
};
const formItemLayoutDiv = {
    labelCol: {
        xs: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 16,
        },
    },
};
class MetadataAppSystemForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedRowKeys: [], isDialog: false};
    }
    changeDialog = (isDialog: boolean) => {
        this.setState({isDialog});
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const {selectedRowKeys, isDialog} = this.state;
        return (
            <div>
                <Form>
                    基础信息注册:
                    <div className={'basis'}>
                        <Row gutter={24}>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'应用系统名称'} >
                                    {getFieldDecorator('appSystemName', {
                                        rules: [
                                            {
                                                type: 'string',
                                                message: '应用系统名称需为字符串格式',
                                            }, {
                                                required: true,
                                                message: '请输入应用系统名称',
                                            },
                                        ],
                                    })(<Input size={'small'} placeholder={'请输入应用系统名称'}  />)
                                    }
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'系统在用标识'} >
                                    {getFieldDecorator('isUsed', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择在用标识',
                                            },
                                        ],
                                    })(
                                        <Select size={'small'} placeholder={'请选择在用标识'}>
                                            <Option value={1}>在用</Option>
                                            <Option value={0}>未用</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'上线时间'} >
                                    {getFieldDecorator('onlineDate', {})(<Input size={'small'} placeholder={'例如:00-00-00-00-00'}  />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'下线时间'} >
                                    {getFieldDecorator('offlineDate', {})(<Input size={'small'} placeholder={'例如:00-00-00-00-00'}  />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'数据库类型'} >
                                    {getFieldDecorator('databaseType', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择数据库类型',
                                            },
                                        ],
                                    })(
                                        <Select size={'small'} placeholder={'请选择数据库类型'}>
                                            <Option value={'0'}>关系型数据库</Option>
                                            <Option value={'1'}>键值数据库</Option>
                                            <Option value={'2'}>面向文档数据库</Option>
                                            <Option value={'3'}>列存储数据库</Option>
                                            <Option value={'4'}>图数据库</Option>
                                            <Option value={'5'}>空间数据库</Option>
                                            <Option value={'6'}>全文数据库</Option>
                                            <Option value={'7'}>内容库</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'访问地址'} >
                                    {getFieldDecorator('visitUrl', {
                                        rules: [
                                            {
                                                type: 'string',
                                                message: '访问地址需为字符串格式',
                                            }, {
                                                required: true,
                                                message: '请输入访问地址',
                                            },
                                        ],
                                    })(<Input size={'small'} placeholder={'请输入访问地址'}  />)
                                    }
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'应用系统说明'} >
                                    {getFieldDecorator('appRemarks', {})(<Input size={'small'} placeholder={'请输入应用系统说明'}  />)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'数据库产品描述'} >
                                    {getFieldDecorator('databaseRemarks', {})(<Input size={'small'} placeholder={'请输入数据库产品描述'}  />)}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    关联单位联系方式:
                    <div className={'basis'} style={{height: 135}} >
                        <Row gutter={24}>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'事权单位'} >
                                    {getFieldDecorator('authority', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择事权单位',
                                            },
                                        ],
                                    })(
                                        <Select size={'small'} placeholder={'请选择事权单位'}>
                                            <Option value={'0'}>省级</Option>
                                            <Option value={'1'}>市级</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'事权单位电话'} >
                                    {getFieldDecorator('authorityPhone', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'事权单位联系人'} >
                                    {getFieldDecorator('authorityUser', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'承建单位'} >
                                    {getFieldDecorator('build', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'承建单位电话'} >
                                    {getFieldDecorator('buildPhone', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'承建单位联系人'} >
                                    {getFieldDecorator('buildUser', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'注册单位'} >
                                    {getFieldDecorator('register', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'注册单位电话'} >
                                    {getFieldDecorator('registerPhone', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                            <Col span={8}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'注册单位联系人'} >
                                    {getFieldDecorator('registerUser', {})(<Input size={'small'}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    分类信息配置:
                    <div className={'basis'} style={{height: 48}} >
                        <Row gutter={24}>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'行业类别'} >
                                    {getFieldDecorator('jobType', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择行业类别',
                                            },
                                        ],
                                    })(
                                        <Select size={'small'} placeholder={'请选择行业类别'}>
                                            <Option value={'0'}>公安</Option>
                                            <Option value={'1'}>政务数据</Option>
                                            <Option value={'2'}>社会数据</Option>
                                            <Option value={'3'}>互联网数据</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'业务分类'} >
                                    {getFieldDecorator('businessType', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择业务分类',
                                            },
                                        ],
                                    })(
                                        <Select size={'small'} placeholder={'请选择业务分类'}>
                                            <Option value={'0'}>PGIS系统</Option>
                                            <Option value={'1'}>刑侦</Option>
                                            <Option value={'2'}>反恐</Option>
                                            <Option value={'3'}>后勤</Option>
                                            <Option value={'4'}>应用支撑</Option>
                                            <Option value={'5'}>条形业务应用</Option>
                                            <Option value={'6'}>警务综合</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    配置信息:
                    <div className={'basis'} style={{height: 48}} >
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutDiv} label={'部署服务器'} >
                            {getFieldDecorator('servers', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择部署服务器',
                                    },
                                ],
                            })(<div className={'form-tags'}><Icon icon={'cog'} color={'#4ea3d4'} onClick={() => this.changeDialog(true)}/></div>)}
                        </FormItem>
                    </div>
                </Form>
                {isDialog ? <MetadataMachineCheckDialog {...{selectedRowKeys}} changeDialog={this.changeDialog}/> : null}
            </div>

        );
    }
}
export default MetadataAppSystemForm;
