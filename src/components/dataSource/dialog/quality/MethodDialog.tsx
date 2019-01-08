import React, { Component } from 'react';
import {Modal, Button, Row, Col, Input} from 'antd';
import {Button as BlueButton, Icon} from '@blueprintjs/core';
const { TextArea } = Input;
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};


class MethodDialog extends Component<propTypes> {
    constructor(props: propTypes) {
        super(props);
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    changeDialog = (isDialog: boolean) => {
        this.setState({isDialog});
    };

    render() {
        const {width} = this.props;
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'数据质量评估配置页面'}
                width={width - 420}
                style={{top: 20}}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="back" onClick={this.onClose}>关闭</Button>]}
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
                        </Row>
                    </div>
                </div>
            </Modal>
        );
    }
}
export default MethodDialog;
