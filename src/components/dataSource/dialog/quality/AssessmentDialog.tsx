import React, { Component } from 'react';
import {Modal, Button, Row, Col, Input, Radio, Select, TimePicker, DatePicker, InputNumber} from 'antd';
import {Button as BlueButton, Icon} from '@blueprintjs/core';
import AssessmentColDialog from './AssessmentColDialog';
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const Option = Select.Option;
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

type stateTypes = {
    plan: number;
    interval: string;
    isDialog: boolean;
};

class AssessmentDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {plan: 2, interval: 'day', isDialog: false};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    changeDialog = (isDialog: boolean) => {
        this.setState({isDialog});
    };
    showRunTime = () => {
        const {interval} = this.state;
        const intervalSelect = (
            <Select value={interval} size={'small'} style={{width: 80}} onChange={(e) => this.setState({interval: e})}>
                <Option value={'day'}>日</Option>
                <Option value={'week'}>周</Option>
                <Option value={'month'}>月</Option>
            </Select>
        );
        if (interval === 'day') {
            return (
                <span>每&nbsp;&nbsp;
                    {intervalSelect}
                    <TimePicker size={'small'} format={'HH:mm'}/>
                </span>);
        } else if (interval === 'week') {
            return (
                <span>每&nbsp;&nbsp;
                    {intervalSelect}
                    <InputNumber size={'small'} min={1} max={7}/>&nbsp;星期
                </span>);
        } else if (interval === 'month') {
            return (
                <span>每&nbsp;&nbsp;
                    {intervalSelect}
                    <DatePicker size={'small'} />
                    <TimePicker size={'small'} format={'HH:mm'}/>
                </span>);
        } else {
            return null;
        }
    };
    render() {
        const {plan, isDialog} = this.state;
        const {width} = this.props;
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'数据质量评估配置页面'}
                width={540}
                style={{top: 20}}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div className={'basis'} style={{color: 'black', height: 275}}>
                    <div>
                        <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>数据源:</Col>
                        </Row>
                        <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>评估对象:</Col>
                        </Row>
                        <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>总记录数:</Col>
                            <Col span={10}>12312</Col>
                            &nbsp;&nbsp;
                            <Button size={'small'} type={'primary'}>计算总量</Button>
                        </Row>
                        <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>预计抽样数:</Col>
                            <Col span={10}><Input size={'small'}/></Col>
                            条&nbsp;&nbsp;(预定抽样数小于100000条)
                        </Row>
                        <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>过滤条件:(where)</Col>
                            <Col span={18}><TextArea rows={4}/></Col>
                            <BlueButton icon={<Icon icon={'edit'} color={'#1f88d1'}/>} small={true} minimal={true} onClick={() => this.changeDialog(true)} />
                        </Row>
                        <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>调度计划:</Col>
                            <RadioGroup value={plan} onChange={(e) => this.setState({plan: e.target.value})}>
                                <Radio value={1}>定时</Radio>
                                <Radio value={2}>手动</Radio>
                            </RadioGroup>
                        </Row>
                        {plan === 1 ? <Row gutter={12} style={{lineHeight: '28px'}}>
                            <Col style={{textAlign: 'right'}} span={4}>执行时间:</Col>
                                {this.showRunTime()}
                        </Row> : null}
                    </div>
                </div>
                {isDialog ? <AssessmentColDialog changeDialog={this.changeDialog} width={width}/> : null}
            </Modal>
        );
    }
}
export default AssessmentDialog;
