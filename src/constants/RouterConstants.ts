import ExploitContainer from '../containers/ExploitContainer';
import ExploitHeadContainer from '../containers/head/ExploitHeadContainer';
export const DEVELOP_ASSEMBLY = '/exploit/assembly';
export const paths = [ { text : '开发套件', icon : 'shop' , path : DEVELOP_ASSEMBLY } ];

export const INITIAL_ROUTE = {
  keys: {},
  options: {},
  path: location.hash,  // 初始化为hash地址
};

export const routes = {
  [DEVELOP_ASSEMBLY]: ExploitContainer,
};

export const headRoutes = {
    [DEVELOP_ASSEMBLY]: ExploitHeadContainer,
};
