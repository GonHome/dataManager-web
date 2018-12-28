import React, { Component } from 'react';
import {Form, Input, Select} from 'antd';
const Option = Select.Option;
const FormItem = Form.Item;
type propTypes = {
    form: any;
};
const formItemLayoutInput = {
    labelCol: {
        xs: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 16,
        },
    },
};
class DatabaseInfoForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <div className={'basis'} style={{height: 135}}>
                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'库中文名称'} >
                        {getFieldDecorator('serverName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入库中文名称',
                                },
                            ],
                        })(<Input size={'small'} placeholder={'请输入库中文名称'}  />)
                        }
                    </FormItem>
                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'库英文名称'} >
                        {getFieldDecorator('serverName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入库英文名称',
                                },
                            ],
                        })(<Input size={'small'} placeholder={'请输入库英文名称'}  />)
                        }
                    </FormItem>
                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'库技术类型'} >
                        {getFieldDecorator('serverName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请选择库技术类型',
                                },
                            ],
                        })(
                            <Select size={'small'} placeholder={'请选择库技术类型'}  >
                                <Option value={'1'}>Oracle</Option>
                                <Option value={'2'}>MySql</Option>
                                <Option value={'3'}>SqlServer</Option>
                            </Select>
                        )}
                    </FormItem>
                </div>
            </Form>
        );
    }
}
export default DatabaseInfoForm;
