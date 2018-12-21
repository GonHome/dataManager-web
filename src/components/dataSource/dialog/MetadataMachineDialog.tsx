import React, { Component } from 'react';
import { Modal, Button, Form} from 'antd';
import MetadataMachineForm from '../form/MetadataMachineForm';
type propTypes = {
    details: any;
    isEditable: boolean;
    changeRegister: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
type stateTypes = {
};
class MetadataMachineDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
      const {changeRegister} = this.props;
      changeRegister(false, null, true, '');
    };
    render() {
        const {title} = this.props;
        const WrappedForm = Form.create()(MetadataMachineForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={950}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={[
                    <Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ]}
            >
                <WrappedForm />
            </Modal>
        );
    }
}
export default MetadataMachineDialog;
