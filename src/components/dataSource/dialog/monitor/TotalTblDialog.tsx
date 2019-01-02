import React, { Component } from 'react';
import {Modal, Button, Select, Input, Table, Pagination} from 'antd';
import {ButtonGroup, Button as BlueButton, Icon} from '@blueprintjs/core';

type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

class TotalTblDialog extends Component<propTypes> {
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
            title: '数据对象名称',
            dataIndex: 'name',
            width: 200,
        }, {
            title: '中文名称',
            dataIndex: 'ip',
            width: 200,
        }, {
            title: '业务分类',
            dataIndex: 'hostType',
            width: 150,
        }, {
            title: '数据总量(条)',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '更新量(条)',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '存储空间(MB)',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '索引空间(MB)',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '大字段空间(MB)',
            dataIndex: 'mainUse',
            width: 150,
        }, {
            title: '操作',
            dataIndex: 'mainUse',
            width: 70,
            render: (text: string, record: any) => (
                <div>
                    <BlueButton icon={<Icon icon={'application'} color={'#1f88d1'}/>}  minimal={true} small={true}/>
                </div>),
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
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div>
                    <ButtonGroup>
                        业务分类:&nbsp;<Select style={{width: 180}}  size={'small'}/>&nbsp;&nbsp;
                        数据对象名称:&nbsp;<Input style={{width: 180}}  size={'small'}/>&nbsp;&nbsp;
                        中文名称:&nbsp;<Input style={{width: 180}}  size={'small'}/>&nbsp;&nbsp;
                        <Button size={'small'} type={'primary'} icon={'search'}>查询</Button>
                    </ButtonGroup>
                    <Button style={{float: 'right'}} size={'small'} type={'primary'} icon={'download'}>导出</Button>
                    <Table style={{marginTop: 10}} rowSelection={{}} className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} scroll={{x: 1470}}/>
                    <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                </div>
            </Modal>
        );
    }
}
export default TotalTblDialog;
