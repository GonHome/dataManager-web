import {Component} from 'react';
import React from 'react';
import {Select, Input, Button, Table, Radio} from 'antd';

type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

class TotalBasis extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    render() {
        const columns = [{
            title: '数据对象名称',
            dataIndex: 'id',
            width: '20%',
        }, {
            title: '中文名称',
            dataIndex: 'name',
            width: '20%',
        }, {
            title: '业务分类',
            dataIndex: 'ip',
            width: '15%',
        }, {
            title: '定时',
            dataIndex: 'hostType',
            width: '15%',
            render: (text: string, record: any) => (<Radio />),
        }, {
            title: '一次性',
            dataIndex: 'mainUse',
            width: '15%',
            render: (text: string, record: any) => (<Radio />),
        }, {
            title: '不统计',
            dataIndex: 'mainUse',
            width: '15%',
            render: (text: string, record: any) => (<Radio />),
        }];
        const data = [{}];
        return (
            <div>
                <span>业务分类:</span>&nbsp;&nbsp;<Select size={'small'} style={{width: 200}}/>&nbsp;&nbsp;
                <span>关键字:&nbsp;&nbsp;<Input size={'small'} style={{width: 200}}/></span>&nbsp;&nbsp;
                <Button style={{position: 'absolute', marginTop: -1}} type={'primary'} size={'small'} icon={'search'}>查询</Button>
                <Table style={{marginTop: 10}} size={'small'} columns={columns} dataSource={data} bordered={true} pagination={false}/>
            </div>
        );
    }
}

export default TotalBasis;
