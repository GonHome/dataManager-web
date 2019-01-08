import React, { Component } from 'react';
import {Modal, Button, Input, Table, Pagination, DatePicker } from 'antd';
import {ButtonGroup} from '@blueprintjs/core';
const {RangePicker} = DatePicker;
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

class AssessmentLogDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {width} = this.props;
        const columns = [{
            title: '序号',
            dataIndex: 'id',
            width: '5%',
        }, {
            title: '数据源',
            dataIndex: 'name',
            width: '15%',
        }, {
            title: '数据中文名',
            dataIndex: 'ip',
            width: '25%',
        }, {
            title: '评估时间',
            dataIndex: 'hostType',
            width: '15%',
        }, {
            title: '耗时',
            dataIndex: 'mainUse',
            width: '5%',
        }, {
            title: '实际抽样数',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '执行结果',
            dataIndex: 'mainUse',
            width: '25%',
        }];
        const data = [{
            key: '1',
            name: '库1',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }, {
            key: '2',
            name: '库2',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }, {
            key: '3',
            name: '库3',
            ip: 32,
            hostType: '其他',
            mainUse: '数据库服务器',
        }];
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'数据质量评估日志列表'}
                width={width - 220}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div>
                    <ButtonGroup>
                        评估时间:&nbsp;<RangePicker size={'small'}/>&nbsp;&nbsp;
                        资源中文名:&nbsp;<Input style={{width: 180}}  size={'small'}/>&nbsp;&nbsp;
                        <Button size={'small'} type={'primary'} icon={'search'}>查询</Button>
                    </ButtonGroup>
                    <Table style={{marginTop: 10}}  className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} />
                    <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                </div>
            </Modal>
        );
    }
}
export default AssessmentLogDialog;
