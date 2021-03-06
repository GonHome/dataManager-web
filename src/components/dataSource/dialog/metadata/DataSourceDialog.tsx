import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col} from 'antd';
import SourceForm from '../../form/metadata/SourceForm';
import {sourceTypes} from '../../../../constants/DataSourceConstants';
type propTypes = {
    details: any;
    width: number;
    isEditable: boolean;
    changeDialog: (isRegister: boolean, details: any, isEditable: boolean, title: string) => void;
    title: string;
};
type stateType = {
  checkedSource: string;
};
class DataSourceDialog extends Component<propTypes, stateType> {
    constructor(props: propTypes) {
        super(props);
        this.state = {checkedSource: sourceTypes[0].name};
    }
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false, null, true, '');
    };
    render() {
        const {title, width} = this.props;
        const {checkedSource} = this.state;
        const WrappedForm = Form.create()(SourceForm);
        let checkedIndex = -1;
        let DatabaseForm = null;
        sourceTypes.map((item, index) => {
            if (checkedSource === item.name) {
                checkedIndex = index;
                DatabaseForm = item.form;
            }
        });
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={title}
                width={width - 420}
                style={{top: 20}}
                bodyStyle={{padding: 12}}
                onCancel={this.onClose}
                footer={[
                    <Button title={'测试连接'} size={'small'} key="submit" type="primary" >测试连接</Button>,
                    <Button title={'保存'} size={'small'} key="back" onClick={this.onClose}>保存</Button>,
                ]}
            >
                <Row gutter={24}>
                    <Col span={5}>
                        <div className={'title-source'}>数据源类型:</div>
                        <div className={'sources'}>
                            {checkedIndex > -1 ? <div className={'check-source'} style={{marginTop: checkedIndex * 20}} /> : null}
                            {sourceTypes.map((item, index) => {
                                return <div style={{marginTop: index * 20}} onClick={() => this.setState({checkedSource: item.name})} className={'source-type'} key={item.name}>{item.name}</div>;
                            })}
                        </div>
                    </Col>
                    <Col span={19}>
                        <WrappedForm DatabaseForm={DatabaseForm} width={width}/>
                    </Col>
                </Row>

            </Modal>
        );
    }
}
export default DataSourceDialog;
