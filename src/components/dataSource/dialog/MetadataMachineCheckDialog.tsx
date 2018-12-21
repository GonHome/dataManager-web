import React, { Component } from 'react';
import { Modal, Button, notification, LocaleProvider } from 'antd';
import MetadataMachine from '../center/submodule/MetadataMachine';
import zh_CN from '../../../../node_modules/antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import '../../../../node_modules/moment/locale/zh-cn';
moment.locale('zh-cn');
type propTypes = {
    selectedRowKeys: string[];
    changeDialog: (isDialog: boolean) => void;
};
type stateTypes = {
    selectedRowKeys: string[];
};
const openNotificationWithIcon = (type: string) => {
    // @ts-ignore
    notification[type]({
        message: '错误信息',
        description: '未选择服务器',
    });
};
class MetadataAppSystemDialog extends Component<propTypes, stateTypes> {
    constructor(props: propTypes) {
        super(props);
        this.state = {selectedRowKeys: []};
    }
    componentDidMount() {
        const {selectedRowKeys} = this.props;
        this.setState({selectedRowKeys});
    }
    changeSelectedKeys = (selectedRowKeys: string[]) => {
        this.setState({selectedRowKeys});
    };
    onClose = () => {
        const {changeDialog} = this.props;
        changeDialog(false);
    };
    checkServers = () => {
        const {selectedRowKeys} = this.state;
        if (selectedRowKeys.length === 0) {
            openNotificationWithIcon('error');
        }
    };
    render() {
        return (
            <Modal
                className={'small-modal'}
                maskClosable={false}
                visible={true}
                title={'服务器选择'}
                width={950}
                style={{top: 20}}
                bodyStyle={{padding: 6, height: 500}}
                onCancel={this.onClose}
                footer={[
                    <Button size={'small'} key="submit" type="primary" onClick={this.checkServers}>确定</Button>,
                    <Button size={'small'} key="back" onClick={this.onClose} >取消</Button>,
                ]}
            >
                <LocaleProvider locale={zh_CN}>
                    <MetadataMachine height={500} isAction={true} changeSelectedKeys={this.changeSelectedKeys}/>
                </LocaleProvider>
            </Modal>
        );
    }
}
export default MetadataAppSystemDialog;
