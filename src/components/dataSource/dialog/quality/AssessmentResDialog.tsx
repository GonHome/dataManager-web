import React, { Component } from 'react';
import {Modal, Button, Table, Pagination, Row, Col } from 'antd';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

class AssessmentResDialog extends Component<propTypes> {
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
            title: '字段名',
            dataIndex: 'name',
            width: '10%',
        }, {
            title: '字段名称',
            dataIndex: 'ip',
            width: '25%',
        }, {
            title: '类型',
            dataIndex: 'hostType',
            width: '10%',
        }, {
            title: '完整性',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '唯一性',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '值范围',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '长度范围',
            dataIndex: 'mainUse',
            width: '10%',
        }, {
            title: '字段类型',
            dataIndex: 'mainUse',
            width: '10%',
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
                title={'数据质量评估结果列表'}
                width={width - 220}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >导出</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div>
                    <div className={'basis'} style={{color: 'black', height: 55}}>
                        <Row gutter={12}>
                            <Col span={3} style={{textAlign: 'right'}}>数据源:</Col>
                            <Col span={5}>标准库</Col>
                            <Col span={3} style={{textAlign: 'right'}}>评估对象:</Col>
                            <Col span={5}>标准库</Col>
                            <Col span={3} style={{textAlign: 'right'}}>总记录数:</Col>
                            <Col span={5}>标准库</Col>
                            <Col span={3} style={{textAlign: 'right'}}>实际抽样数:</Col>
                            <Col span={5}>标准库</Col>
                            <Col span={3} style={{textAlign: 'right'}}>评估时间:</Col>
                            <Col span={5}>标准库</Col>
                        </Row>
                    </div>
                    <Table style={{marginTop: 10}}  className={'table'} pagination={false} columns={columns} dataSource={data} size="small" bordered={true} />
                    <Pagination className={'page'} size="small" total={50} showSizeChanger={true} showQuickJumper={true} />
                </div>
            </Modal>
        );
    }
}
export default AssessmentResDialog;
