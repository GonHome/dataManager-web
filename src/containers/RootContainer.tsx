import * as React from 'react';
import { stateTypes } from '../reducers';
import Root from '../components/Root';
import { connect } from 'react-redux';
import { initRouter } from '../actions/RouterActions';
import * as  RouterConstants from '../constants/RouterConstants';
import {path} from '../models/models';

type propTypes = {
    initRouter: (paths: path[]) => void;
    paths: path[];
};

const RootContainer = (props: propTypes) => <Root {...props} />;

const mapStateToProps = (state: stateTypes) => ({
    paths: RouterConstants.paths,
});

export default connect(mapStateToProps, {
    initRouter,
})(RootContainer);
