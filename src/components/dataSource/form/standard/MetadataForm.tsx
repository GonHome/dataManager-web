import React, { Component } from 'react';
import {Form, Row, Col, Table} from 'antd';
import {InputGroup, Button as BlueButton, Intent} from '@blueprintjs/core';
type propTypes = {
    form: any;
};
const columns = [{
    title: '字段英文名',
    dataIndex: 'id',
    width: 120,
}, {
    title: '字段中文名',
    dataIndex: 'name',
    width: 120,
}, {
    title: '字段类型',
    dataIndex: 'ip',
    width: 120,
}, {
    title: '字段长度',
    dataIndex: 'hostType',
    width: 120,
}, {
    title: '所属目录数据项编号',
    dataIndex: 'mainUse',
    width: 200,
}, {
    title: '标准数据项英文名',
    dataIndex: 'mainUse',
    width: 150,
}, {
    title: '标准数据项中文名',
    dataIndex: 'mainUse',
    width: 150,
}, {
    title: '数据元内部标识符',
    dataIndex: 'mainUse',
    width: 150,
}, {
    title: '数据元名称',
    dataIndex: 'mainUse',
    width: 120,
}, {
    title: '限定词内部标识符',
    dataIndex: 'mainUse',
    width: 150,
}, {
    title: '限定词名称',
    dataIndex: 'mainUse',
    width: 120,
}];
class MetadataForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const lockButton = (
            <BlueButton
                icon={'search'}
                intent={Intent.PRIMARY}
                minimal={true}
            />
        );
        return (
            <Form>
                <span className={'label'}>基本信息:</span>
                <div className={'basis'} style={{height: 95}}>
                    <Row gutter={24}>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>数据对象名称:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>中文名称:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>资源提供单位:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>表用途分类代码:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>更新方式:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>更新周期:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>行业分类:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>业务分类:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>要素一级分类:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>要素二级分类:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>资源属性分类:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>要素细目分类:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>共享范围:</span>
                        </Col>
                        <Col span={4} className={'form-item'}>
                            <span className={'label'}>所属库类型:</span>
                        </Col>
                    </Row>
                </div>
                <span className={'label'}>关联信息:</span>
                <div className={'basis'} style={{height: 67}}>
                    <Col span={8} className={'form-item'}>
                        <span className={'label'}>所属数据源:</span>
                    </Col>
                    <Col span={8} className={'form-item'}>
                        <span className={'label'}>对标GAB数据项集规范表:</span>
                    </Col>
                    <Col span={8} className={'form-item'}>
                        <span className={'label'}>对标个数:</span>
                    </Col>
                    <Col span={8} className={'form-item'}>
                        <span className={'label'}>所属系统:</span>
                    </Col>
                    <Col span={8} className={'form-item'}>
                        <span className={'label'}>对标本地标准规范表:</span>
                    </Col>
                </div>
                <span className={'label'}>结构信息:
                    <div className={'input-bar'}>
                        <InputGroup
                            placeholder="请输入表中文名或表英文名"
                            rightElement={lockButton}
                            small={true}
                            type={'text'}
                        />
                    </div>
                </span>
                <Table style={{marginTop: 10}} className={'table'} pagination={false} columns={columns}  size="small" bordered={true} scroll={{x: 1520}} />
            </Form>
        );
    }
}
export default MetadataForm;
