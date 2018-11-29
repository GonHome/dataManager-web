import {routeTypes} from '../reducers/router';
import * as React from 'react';

type propTypes = {
    route: routeTypes;
    routes: any ;
};

const Router = ({route, routes}: propTypes ) => {
    const {path} = route;
    console.log(path, routes );
    if ( path in routes ) {
        const Component = routes[path];
        return (<Component />);
    } else {
        return (<div>路径不对啊</div>);
    }
};

export default Router;
