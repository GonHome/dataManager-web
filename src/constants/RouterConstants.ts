import ExploitContainer from '../containers/ExploitContainer';
import DataSourceContainer from '../containers/DataSourceContainer';
import ExploitHeadContainer from '../containers/head/ExploitHeadContainer';
import DataSourceHeadContainer from '../containers/head/DataSourceHeadContainer';
export const DEVELOP_ASSEMBLY = '/exploit/assembly';
export const DATASOURCE_MANAGE = '/dataSource/manage/:path*';
export const paths = [
    { text : '开发套件', icon : 'list' , path : DEVELOP_ASSEMBLY },
    { text : '大数据资源管理系统', icon : 'graph' , path : DATASOURCE_MANAGE },
];

export const INITIAL_ROUTE = {
  keys: {},
  options: {},
  path: location.hash,  // 初始化为hash地址
};

export const routes = {
    [DEVELOP_ASSEMBLY]: ExploitContainer,
    [DATASOURCE_MANAGE]: DataSourceContainer,
};

export const headRoutes = {
    [DEVELOP_ASSEMBLY]: ExploitHeadContainer,
    [DATASOURCE_MANAGE]: DataSourceHeadContainer,
};
