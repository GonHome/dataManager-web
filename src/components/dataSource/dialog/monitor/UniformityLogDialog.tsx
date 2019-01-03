import React, { Component } from 'react';
import {Modal, Button, Table, Pagination} from 'antd';

type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

class UniformityLogDialog extends Component<propTypes> {
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
            width: 100,
        }, {
            title: '数据源A',
            dataIndex: 'name',
            width: 200,
        }, {
            title: '数据对象A',
            dataIndex: 'ip',
            width: 200,
        }, {
            title: '数据A总量',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '数据源B',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '数据源B',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '数据对象B',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '对象B总量',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '总量差',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '是否一致',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '上次执行时间',
            dataIndex: 'mainUse',
            width: 250,
        }, {
            title: '执行状态',
            dataIndex: 'mainUse',
            width: 150,
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
                title={'数据总量统计对象信息页面'}
                width={width - 220}
                style={{top: 20}}
                bodyStyle={{padding: '12px 12px 36px'}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div>
                    <Table style={{margin: '10px 0px 5px'}}  className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} scroll={{x: 1950}}/>
                    <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                </div>
            </Modal>
        );
    }
}
export default UniformityLogDialog;
