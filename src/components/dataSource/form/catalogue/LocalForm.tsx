import React, { Component } from 'react';
import {Form, Row, Col, Table, Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import {Button, Intent} from '@blueprintjs/core';
type propTypes = {
    form: any;
};
const columns = [{
    title: '字段名',
    dataIndex: 'id',
    width: '25%',
}, {
    title: '字段中文名',
    dataIndex: 'name',
    width: '25%',
}, {
    title: '数据项类型',
    dataIndex: 'ip',
    width: '25%',
}, {
    title: '数据长度',
    dataIndex: 'hostType',
    width: '25%',
}];
class LocalForm extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        return (
            <Form>
                <span className={'label'}>基本信息:</span>
                <div className={'basis'} style={{height: 40}}>
                    <Row gutter={24}>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>数据对象名称:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>中文名称:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>数据源:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>所属系统:</span>
                        </Col>
                    </Row>
                </div>
                <span className={'label'}>分类信息:</span>
                <div className={'basis'} style={{height: 95}}>
                    <Row gutter={24}>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>行业分类:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>业务分类:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>要素二级分类:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>资源属性分类:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>要素一级分类:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>要素细目分类:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>更新方式:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>更新周期:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>表用途分类代码:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>数据获取方式:</span>
                        </Col>
                        <Col span={6} className={'form-item'}>
                            <span className={'label'}>资源提供单位:</span>
                        </Col>
                    </Row>
                </div>
                <Button style={{position: 'absolute', marginTop: 10, right: 28}} small={true} intent={Intent.PRIMARY} text={'预览数据'} />
                <Tabs defaultActiveKey="1">
                    <TabPane tab="结构信息" key="1">
                        <Table style={{marginTop: 10}} className={'table'} pagination={false} columns={columns}  size="small" bordered={true}/>
                    </TabPane>
                    <TabPane tab="键值信息" key="2">
                        <Table style={{marginTop: 10}} className={'table'} pagination={false} columns={columns}  size="small" bordered={true}/>
                    </TabPane>
                    <TabPane tab="关联配置信息" key="3">
                        <Table style={{marginTop: 10}} className={'table'} pagination={false} columns={columns}  size="small" bordered={true}/>
                    </TabPane>
                </Tabs>
            </Form>
        );
    }
}
export default LocalForm;
