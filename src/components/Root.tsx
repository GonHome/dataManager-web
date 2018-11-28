import React, { Component } from 'react';
import {path} from '../models/models';

type propTypes = {
    initRouter: (paths: path[]) => void;
    paths: path[];
};

class Root extends Component<propTypes> {
    componentDidMount() {
        const {initRouter, paths} = this.props;
        initRouter(paths);
    }
    render() {
        return (<div>试试</div>);
    }
}
export default Root;
