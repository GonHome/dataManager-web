import * as React from 'react';
import { stateTypes } from '../../reducers';
import DataSourceHead from '../../components/head/DataSourceHead';
import { connect } from 'react-redux';
import {getWidth} from '../../selectots/CommonSelectors';
import * as commonConstants from '../../constants/CommonConstants';
import '../../styles/dataSource.scss';
type propTypes = {
    height: number;
    width: number;
};

const ExploitHeadContainer = (props: propTypes) => <DataSourceHead {...props} />;

const mapStateToProps = (state: stateTypes) => ({
    height: commonConstants.HEAD_HEIGHT,
    width: getWidth(state),
});

export default connect(mapStateToProps, {
})(ExploitHeadContainer);
