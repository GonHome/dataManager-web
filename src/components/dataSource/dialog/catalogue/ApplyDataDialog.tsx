import React, { Component } from 'react';
import { Modal, Button} from 'antd';
import DataObject from '../../center/submodule/metadata/DataObject';
type propTypes = {
    width: number;
    changeDialog: (isDialog: boolean) => void;
};
type stateTypes = {
    selectedRowKeys: string[];
};
class ApplyDataDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedRowKeys: []};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false);
    };
    changeSelectedKeys = (selectedRowKeys: string[]) => {
        this.setState({selectedRowKeys});
    };
    render() {
        const {width} = this.props;
        const {selectedRowKeys} = this.state;
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'选择数据对象'}
                width={width - 100}
                style={{top: 20}}
                bodyStyle={{height: 480, padding: 8}}
                onCancel={this.onClose}
                footer={[
                    <Button size={'small'} key="submit" type="primary" >添加</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ]}
            >
                <DataObject width={width} changeSelectedKeys={this.changeSelectedKeys} isAction={true} selectedRowKeys={selectedRowKeys} height={480} />
            </Modal>
        );
    }
}
export default ApplyDataDialog;
