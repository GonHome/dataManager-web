import React, { Component } from 'react';
import {Modal, Button, Row, Col, Radio, Form} from 'antd';
import ProgramForm from '../../form/monitor/ProgramForm';
import ProgramConfigForm from '../../form/monitor/ProgramConfigForm';
const RadioGroup = Radio.Group;
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};

type stateTypes = {
    radio: number;
};

class UniformityDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {radio: 1};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };

    render() {
        const {width, title} = this.props;
        const {radio} = this.state;
        const WrappedProgramForm = Form.create()(ProgramForm);
        const WrappedConfigForm = Form.create()(ProgramConfigForm);
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 420}
                style={{top: 20}}
                onCancel={this.onClose}
                footer={[<Button size={'small'} key="submit" type="primary" >保存</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>]}
            >
                <div className={'basis'} style={{height: 325}}>
                    <Row gutter={24}>
                        <Col span={12}>
                            <div className={'basis'} style={{height: 300}}>
                                <span style={{fontSize: 14, fontWeight: 'bold'}}>方案</span>
                                <WrappedProgramForm />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className={'basis'} style={{height: 300}}>
                                <span style={{fontSize: 14, fontWeight: 'bold'}}>方案配置</span>
                                <div style={{width: '100%', height: 32, lineHeight: '32px', backgroundColor: '#edf1f3'}}>
                                    <RadioGroup style={{width: '100%'}} value={radio} onChange={(e) => this.setState({radio: e.target.value})}>
                                        <Radio style={{width: '45%', textAlign: 'center'}} value={1}>定时</Radio>
                                        <Radio style={{width: '45%', textAlign: 'center'}} value={2}>手动</Radio>
                                    </RadioGroup>
                                </div>
                                {radio === 1 ? <WrappedConfigForm /> : null}
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal>
        );
    }
}
export default UniformityDialog;
