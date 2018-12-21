import React, { Component } from 'react';
import { Modal, Button, Form} from 'antd';
import MetadataAppSystemForm from '../../form/MetadataAppSystemForm';
type propTypes = {
    details: any;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
class AppSystemDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title} = this.props;
        const WrappedForm = Form.create()(MetadataAppSystemForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={950}
                style={{top: 20}}
                bodyStyle={{padding: 12}}
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
export default AppSystemDialog;
