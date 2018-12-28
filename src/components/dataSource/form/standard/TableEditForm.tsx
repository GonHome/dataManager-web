import React, { Component } from 'react';
import {Form, Input} from 'antd';
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
class TableEditForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form>
                <div className={'basis'} style={{height: 95}}>
                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'表中文名称'} >
                        {getFieldDecorator('serverName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入表中文名称',
                                },
                            ],
                        })(<Input size={'small'} placeholder={'请输入表中文名称'}  />)
                        }
                    </FormItem>
                    <FormItem style={{marginBottom: 0}} {...formItemLayoutInput} label={'表英文名称'} >
                        {getFieldDecorator('serverName', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入表英文名称',
                                },
                            ],
                        })(<Input size={'small'} placeholder={'请输入表英文名称'}  />)
                        }
                    </FormItem>
                </div>
            </Form>
        );
    }
}
export default TableEditForm;
