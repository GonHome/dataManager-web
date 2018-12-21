import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col} from 'antd';
import MetadataMachineForm from '../../form/MetadataMachineForm';
import {sourceTypes} from '../../../../constants/DataSourceConstants';
import classNames from 'classnames';
type propTypes = {
    details: any;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
type stateType = {
  checkedSource: string;
};
class DataSourceDialog extends Component<propTypes, stateType> {
    constructor(props: propTypes) {
        super(props);
        this.state = {checkedSource: sourceTypes[0]};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title} = this.props;
        const {checkedSource} = this.state;
        const WrappedForm = Form.create()(MetadataMachineForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={1150}
                style={{top: 20}}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={[
                    <Button size={'small'} key="submit" type="primary" >测试连接</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >保存</Button>,
                ]}
            >
                <Row gutter={24}>
                    <Col span={4}>
                        <div style={{color: '#00b5ff'}}>数据源类型:</div>
                        <div style={{height: 400, border: '1px solid #b1becc', padding: 10}}>
                            {sourceTypes.map((item) => {
                                return <div onClick={() => this.setState({checkedSource: item})} className={classNames({ 'source-type': true, 'active': checkedSource === item})} key={item}>{item}</div>;
                            })}
                        </div>
                    </Col>
                    <Col span={20}>
                        <WrappedForm />
                    </Col>
                </Row>

            </Modal>
        );
    }
}
export default DataSourceDialog;
