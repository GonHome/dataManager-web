import React, { Component } from 'react';
import { Modal, Button} from 'antd';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
type stateTypes = {
    isDialog: boolean;
    isSqlDialog: boolean;
    isTblDialog: boolean;
    details: any;
    isEditable: boolean;
    title: string;
};
class DatabaseSqlDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {isDialog: false, isSqlDialog: false, isTblDialog: false, details: null, isEditable: true, title: ''};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title, width, isEditable} = this.props;
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 420}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={isEditable ? [
                    <Button size={'small'} key="submit" type="primary" >确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ] : false}
            >
                <div>
                    <span>
                        <span className={'label'} style={{color: '#007aff'}}>当前数据库名称:</span>测试库&nbsp;
                        <span className={'label'} style={{color: '#007aff'}}>创建人:</span>管理员&nbsp;
                        <span className={'label'} style={{color: '#007aff'}}>创建时间:</span>2018-12-28&nbsp;
                        <span className={'label'} style={{color: '#007aff'}}>技术类型:</span>Oracle&nbsp;
                    </span>
                    <div className={'basis'}>
                        这里写sql
                    </div>
                </div>

            </Modal>
        );
    }
}
export default DatabaseSqlDialog;
