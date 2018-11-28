import * as React from 'react';
import { RootState } from '../store';
import Root from '../components/Root';
import { connect } from 'react-redux';
// import * as todosActions from '../actions/actions';
import * as  RouterConstants from '../constants/RouterConstants';
import {path} from '../models/models';

type propTypes = {
    // initRouter: (path: string) => void;
    paths: path[];
};

const RootContainer = (props: propTypes) => <Root {...props} />;

const mapStateToProps = (state: RootState) => ({
    paths: RouterConstants.paths,
});

export default connect(mapStateToProps, {
    // initRouter: (title: string) => todosActions.add({ title })
})(RootContainer);
