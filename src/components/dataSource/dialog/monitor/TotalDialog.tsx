import React, { Component } from 'react';
import {Modal, Button, Steps, Form} from 'antd';
import Basis from '../../form/monitor/Basis';
import ConfigForm from '../../form/monitor/ConfigForm';
const Step = Steps.Step;
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

type stateTypes = {
    current: number;
};

class TotalDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {current: 0};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };

    showFooter = () => {
        const {current} = this.state;
        if ( current === 0 ) {
            return [<Button size={'small'} key="submit" type="primary" onClick={() => this.setState({current: 1})}>下一步</Button>,
                <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>];
        } else {
            return [<Button size={'small'} key="submit" type="primary" onClick={() => this.setState({current: 0})}>上一步</Button>,
                <Button size={'small'} key="submit" type="primary" >保存</Button>,
                <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>];
        }
    };
    render() {
        const {width} = this.props;
        const {current} = this.state;
        const WrappedForm = Form.create()(ConfigForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'库数据总量统计配置页面'}
                width={width - 420}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={this.showFooter()}
            >
                <Steps  current={current}>
                    <Step  title="基本信息" key={1} />
                    <Step  title="调度信息" key={2} />
                </Steps>
                {current === 0 ? <Basis {...this.props} /> : <WrappedForm />}
            </Modal>
        );
    }
}
export default TotalDialog;
