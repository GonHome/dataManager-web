import React, { Component } from 'react';
import { Modal, Button, Form} from 'antd';
import InfoCodeForm from '../../form/metadata/InfoCodeForm';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
class InfoCodeDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title, width} = this.props;
        const WrappedForm = Form.create()(InfoCodeForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 420}
                onCancel={this.onClose}
                footer={[
                    <Button size={'small'} key="submit" type="primary" >确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ]}
            >
                <WrappedForm />
            </Modal>
        );
    }
}
export default InfoCodeDialog;
