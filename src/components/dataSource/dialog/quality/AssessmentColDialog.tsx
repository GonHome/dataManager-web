import React, { Component } from 'react';
import {Modal, Button, Table } from 'antd';
import {Intent, Button as BlueButton, InputGroup} from '@blueprintjs/core';
type propTypes = {
    width: number;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
};

class AssessmentColDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const lockButton = (
            <BlueButton
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        const columns = [{
            title: '字段名',
            dataIndex: 'id',
            width: '50%',
        }, {
            title: '字段中文名',
            dataIndex: 'name',
            width: '50%',
        }];
        const data = [{
            key: '1',
            name: '库1',
        }, {
            key: '2',
            name: '库2',
        }, {
            key: '3',
            name: '库3',
        }, {
            key: '4',
            name: '库4',
        }, {
            key: '5',
            name: '库5',
        }, {
            key: '6',
            name: '库6',
        }];
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'选择数据对象字段'}
                width={450}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div>
                    <div style={{width: '60%'}}>
                        <InputGroup
                            placeholder="请输入字段名/字段中文名"
                            rightElement={lockButton}
                            small={true}
                            type={'text'}
                        />
                    </div>
                    <Table style={{marginTop: 10}} rowSelection={{}}  className={'table'} pagination={false} columns={columns} dataSource={data} size={'small'} scroll={{y: 400}}/>
                </div>
            </Modal>
        );
    }
}
export default AssessmentColDialog;
