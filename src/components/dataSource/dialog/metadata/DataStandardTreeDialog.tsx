import React, { Component } from 'react';
import { Modal, Button, Table} from 'antd';
import {ButtonGroup} from '@blueprintjs/core';
type propTypes = {
    width: number;
    changeDialog: (isDialog: boolean) => void;
};
const columns = [
    {
        title: '序号',
        dataIndex: 'xh',
        width: '10',
    }, {
        title: '规范名称',
        dataIndex: 'name',
        width: '30%',
    }, {
        title: '发布单位',
        dataIndex: 'name',
        width: '15%',
    }, {
        title: '规范表数量',
        dataIndex: 'name',
        width: '15%',
    }, {
        title: '版本',
        dataIndex: 'name',
        width: '15%',
    }, {
        title: '发布日期',
        dataIndex: 'name',
        width: '15%',
    },
];
class DataStandardTreeDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false);
    };
    render() {
        const {width} = this.props;
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'数据规范目录管理'}
                width={width - 200}
                style={{top: 20}}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={[
                    <Button size={'small'} key="submit" type="primary" >确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ]}
            >
                <ButtonGroup>
                    <Button size={'small'} type="primary">下载上级规范</Button>&nbsp;
                    <Button size={'small'} type="primary">新增本地数据规范集合</Button>
                </ButtonGroup>
                <Table style={{marginTop: 10}} size={'small'} columns={columns} bordered={true}/>
            </Modal>
        );
    }
}
export default DataStandardTreeDialog;
