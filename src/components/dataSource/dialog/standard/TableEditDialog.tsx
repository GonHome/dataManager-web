import React, { Component } from 'react';
import { Modal, Button, Form} from 'antd';
import TableEditForm from '../../form/standard/TableEditForm';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
class TableEditDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title, isEditable} = this.props;
        const WrappedForm = Form.create()(TableEditForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={540}
                onCancel={this.onClose}
                footer={isEditable ? [
                    <Button size={'small'} key="submit" type="primary" >确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ] : false}
            >
                <WrappedForm />
            </Modal>
        );
    }
}
export default TableEditDialog;
