import {routeTypes} from '../reducers/router';
import * as React from 'react';

type propTypes = {
    route: routeTypes;
    headRoutes: any ;
};

const HeadRouter = ({route, headRoutes}: propTypes ) => {
    const {path} = route;
    if ( path in headRoutes ) {
        const Component = headRoutes[path];
        return (<Component />);
    } else {
        return null ;
    }
};

export default HeadRouter;
