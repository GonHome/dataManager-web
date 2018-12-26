import React, { Component } from 'react';
import {Col, Form, Pagination, Row, Select, Table} from 'antd';
import {InputGroup, Button, Intent} from '@blueprintjs/core';
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
const formItemLayoutSource = {
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
const formItemLayoutInput = {
    labelCol: {
        xs: {
            span: 10,
        },
    },
    wrapperCol: {
        xs: {
            span: 12,
        },
    },
};
const columns = [{
    title: '数据对象名',
    dataIndex: 'name',
    width: '30%',
}, {
    title: '数据对象中文名',
    dataIndex: 'chineseName',
    width: '40%',
}, {
    title: '所属用户',
    dataIndex: 'username',
    width: '30%',
}];

const data = [{
    key: '1',
    name: 'table1',
    chineseName: '表1',
    username: 'root',
}];

class ObjectForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const rowSelection = {};
        const lockButton = (
            <Button
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        return (
            <Form>
                <Row gutter={12}>
                    <Col span={4}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutSource} label={''} >
                            {getFieldDecorator('source', {
                                rules: [
                                    {
                                        type: 'string',
                                        message: '服务器名称需为字符串格式',
                                    }, {
                                        required: true,
                                        message: '请输入服务器名称',
                                    },
                                ],
                            })(<Select size={'small'} placeholder={'请选择库来源'}  />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutSource} label={''} >
                            {getFieldDecorator('database', {
                                rules: [
                                   {
                                        required: true,
                                        message: '请选择具体数据源',
                                    },
                                ],
                            })(<Select size={'small'} placeholder={'请选择具体数据源'}  />)
                            }
                        </FormItem>
                    </Col>
                    <Col span={4}>
                        <FormItem style={{marginBottom: 0}} {...formItemLayoutSource} label={''} >
                            {getFieldDecorator('username', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请选择具体账号',
                                    },
                                ],
                            })(<Select size={'small'} placeholder={'请选择具体账号'}  />)
                            }
                        </FormItem>
                    </Col>
                    <div  className={'input-bar-action'}>
                        <InputGroup placeholder="请输入数据对象名" rightElement={lockButton} small={true} type={'text'}/>
                    </div>
                </Row>
                <div className={'basis'} style={{height: 380, overflowY: 'hidden'}}>
                    {/*<div style={{width: 'calc(100% - 280px)', height: '100%', display: 'inline-block', textAlign: 'center', marginTop: 130}}>*/}
                        {/*请选择上方的数据源配置*/}
                    {/*</div>*/}
                    <div className={'object-table'}>
                        <Table className={'table'} pagination={false} rowSelection={rowSelection} columns={columns} dataSource={data} size="small" bordered={true} />
                        <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                    </div>
                    <div className={'object-source'}>
                        <div className={'source-title'}>资源分类</div>
                        <div className={'source-form'}>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'行业分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择行业分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择行业分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'业务分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择业务分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择业务分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'要素二级分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择要素二级分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择要素二级分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'资源属性分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择资源属性分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择资源属性分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'要素一级分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择要素一级分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择要素一级分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'要素细目分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择要素细目分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择要素细目分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'数据获取方式'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择数据获取方式',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择数据获取方式'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'资源提供单位'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择资源提供单位',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择资源提供单位'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'应用系统分类'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择应用系统分类',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择应用系统分类'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'更新方式'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择更新方式',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择更新方式'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'更新周期'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择更新周期',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择更新周期'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'表用途分类代码'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择表用途分类代码',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择表用途分类代码'}  />)
                                }
                            </FormItem>
                            <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'是否主表'} >
                                {getFieldDecorator('jobType', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择是否主表',
                                        },
                                    ],
                                })(<Select size={'small'} placeholder={'请选择是否主表'}  />)
                                }
                            </FormItem>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }
}
export default ObjectForm;
