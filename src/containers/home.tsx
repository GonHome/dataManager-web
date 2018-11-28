import * as React from 'react';

import Todos from '../components/main';

export class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome to "typesafe-actions" todo-app!</h1>
                <Todos />
            </React.Fragment> );
    }
}
export default () => (<Home />);
