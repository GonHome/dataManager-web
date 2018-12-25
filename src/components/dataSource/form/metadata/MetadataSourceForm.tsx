import React, { Component } from 'react';
import { Form, Row, Col, Select} from 'antd';
import {Icon} from '@blueprintjs/core';
import MetadataMachineCheckDialog from '../../dialog/metadata/MachineCheckDialog';
import AppCheckDialog from '../../dialog/metadata/AppCheckDialog';
const FormItem = Form.Item;
const Option = Select.Option;
type propTypes = {
    form: any;
    DatabaseForm: any;
};
type stateTypes = {
    selectedServerRowKeys: string[];
    selectedAppRowKeys: string[];
    isServerDialog: boolean;
    isAppDialog: boolean;
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
class MetadataSourceForm extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedServerRowKeys: [], isServerDialog: false, selectedAppRowKeys: [], isAppDialog: false};
    }
    changeServerDialog = (isDialog: boolean) => {
        this.setState({isServerDialog: isDialog});
    };
    changeAppDialog = (isDialog: boolean) => {
        this.setState({isAppDialog: isDialog});
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        const {DatabaseForm} = this.props;
        const {isServerDialog, selectedServerRowKeys, isAppDialog, selectedAppRowKeys} = this.state;
        return (
            <div>
                <Form>
                    <div style={{color: '#00b5ff'}}>连接设置:</div>
                    <div style={{height: 400, width: '100%', border: '1px solid #b1becc', padding: 10}}>
                        连接设置:
                        <DatabaseForm getFieldDecorator={getFieldDecorator} />
                        分类设置:
                        <div className={'basis'} style={{height: 48}}>
                            <Row gutter={24}>
                                <Col span={12}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'网络分类'} >
                                        {getFieldDecorator('networkType', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请选择网络分类',
                                                },
                                            ],
                                        })(
                                            <Select size={'small'} placeholder={'请选择网络分类'}>
                                                <Option value={'1'}>公安网</Option>
                                                <Option value={'2'}>技侦专网</Option>
                                                <Option value={'3'}>网安专网</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'库来源分类'} >
                                        {getFieldDecorator('sourceType', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请选择库来源分类',
                                                },
                                            ],
                                        })(
                                            <Select size={'small'} placeholder={'请选择库来源分类'}>
                                                <Option value={'1'}>代码库</Option>
                                                <Option value={'2'}>本地库</Option>
                                                <Option value={'3'}>来源库</Option>
                                            </Select>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </div>
                        关联信息:
                        <div className={'basis'} style={{height: 48}} >
                            <Row gutter={24}>
                                <Col span={12}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'关联服务器信息'} >
                                        {getFieldDecorator('servers', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请选择关联服务器信息',
                                                },
                                            ],
                                        })(<div style={{width: 209}} className={'form-tags'}><Icon style={{marginLeft: 180}} icon={'cog'} color={'#4ea3d4'} onClick={() => this.changeServerDialog(true)}/></div>)}
                                    </FormItem>
                                </Col>
                                <Col span={12}>
                                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'关联应用系统'} >
                                        {getFieldDecorator('appSystems', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: '请选择关联应用系统',
                                                },
                                            ],
                                        })(<div style={{width: 209}} className={'form-tags'}><Icon style={{marginLeft: 180}} icon={'cog'} color={'#4ea3d4'} onClick={() => this.changeAppDialog(true)}/></div>)}
                                    </FormItem>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Form>
                {isServerDialog ? <MetadataMachineCheckDialog selectedRowKeys={selectedServerRowKeys} changeDialog={this.changeServerDialog}/> : null}
                {isAppDialog ? <AppCheckDialog selectedRowKeys={selectedAppRowKeys} changeDialog={this.changeAppDialog}/> : null}
            </div>
        );
    }
}
export default MetadataSourceForm;
