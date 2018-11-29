import * as React from 'react';
import { stateTypes } from '../reducers';
import {routeTypes} from '../reducers/router';
import Root from '../components/Root';
import { connect } from 'react-redux';
import { initRouter } from '../actions/RouterActions';
import {initEnvironment} from '../actions/EnvironmentActions';
import * as  RouterConstants from '../constants/RouterConstants';
import {getRoute} from '../selectots/CommonSelectors';
import {path} from '../models/models';

type propTypes = {
    initRouter: (paths: path[]) => void;
    paths: path[];
    route: routeTypes;
    routes: any ;
    initEnvironment: () => void;
};

const RootContainer = (props: propTypes) => <Root {...props} />;

const mapStateToProps = (state: stateTypes) => ({
    paths: RouterConstants.paths,
    routes: RouterConstants.routes,
    route: getRoute(state),
});

export default connect(mapStateToProps, {
    initRouter, initEnvironment,
})(RootContainer);
