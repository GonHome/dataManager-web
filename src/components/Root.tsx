import React, { Component } from 'react';
import {path} from '../models/models';
import {routeTypes} from '../reducers/router';
import Router from './Router';
type propTypes = {
    initRouter: (paths: path[]) => void;
    paths: path[];
    route: routeTypes;
    routes: any;
    initEnvironment: () => void ;
};

class Root extends Component<propTypes> {
    componentDidMount() {
        const {initRouter, paths, initEnvironment} = this.props;
        initRouter(paths);
        initEnvironment();
        window.onresize = () => initEnvironment();
    }
    render() {
        const {route, routes} = this.props;
        return ( <Router route={route} routes={routes} /> );
    }
}
export default Root;
