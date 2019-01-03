import React, { Component } from 'react';
import {path} from '../models/models';
import {routeTypes} from '../reducers/router';
import Router from './Router';
import HeadRouter from './HeadRouter';
type propTypes = {
    initRouter: (paths: path[]) => void;
    paths: path[];
    route: routeTypes;
    routes: any;
    headRoutes: any;
    initEnvironment: () => void ;
};

class Root extends Component<propTypes> {
    componentDidMount() {
        const {initRouter, paths, initEnvironment} = this.props;
        window.onpopstate = (e) => {
            initRouter(paths);
        };
        initRouter(paths);
        initEnvironment();
        window.onresize = () => initEnvironment();
    }
    render() {
        const {route, routes, headRoutes} = this.props;
        return (
            <div className={'body'}>
                <HeadRouter route={route} headRoutes={headRoutes} />
                <Router route={route} routes={routes} />
            </div>);
    }
}
export default Root;
