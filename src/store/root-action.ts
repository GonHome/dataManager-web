import { RouterAction, LocationChangeAction } from 'react-router-redux';

import { TodosAction } from '../components/index';

type ReactRouterAction = RouterAction | LocationChangeAction;
export type RootAction = ReactRouterAction | TodosAction;
