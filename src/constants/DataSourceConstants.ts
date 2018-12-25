import MetadataMachine from '../components/dataSource/center/submodule/MetadataMachine';
import MetadataAppSystem from '../components/dataSource/center/submodule/MetadataAppSystem';
import MetadataSource from '../components/dataSource/center/submodule/MetadataSource';
import MetadataDataObject from '../components/dataSource/center/submodule/MetadataDataObject';
import AliyunForm from '../components/dataSource/form/metadata/databaseForms/AliyunForm';
import GbaseForm from '../components/dataSource/form/metadata/databaseForms/GbaseForm';
import HanaForm from '../components/dataSource/form/metadata/databaseForms/HanaForm';
import HBaseForm from '../components/dataSource/form/metadata/databaseForms/HBaseForm';
import MysqlForm from '../components/dataSource/form/metadata/databaseForms/MysqlForm';
import OracleForm from '../components/dataSource/form/metadata/databaseForms/OracleForm';
import PostgreSqlForm from '../components/dataSource/form/metadata/databaseForms/PostgreSqlForm';
import SolrForm from '../components/dataSource/form/metadata/databaseForms/SolrForm';
import SqlServerForm from '../components/dataSource/form/metadata/databaseForms/SqlServerForm';
import ZookeeperForm from '../components/dataSource/form/metadata/databaseForms/ZookeeperForm';
export const LEFT_MENUS = [
    {name: '元数据管理', path: 'metadata', component: null, children: [
            {name: '服务器注册管理', path: 'metadata/machine', component: MetadataMachine, children: []},
            {name: '应用系统注册管理', path: 'metadata/appSystem', component: MetadataAppSystem, children: []},
            {name: '数据源注册管理', path: 'metadata/dataSource', component: MetadataSource, children: []},
            {name: '数据对象注册管理', path: 'metadata/dataObject', component: MetadataDataObject, children: []},
            {name: '信息代码注册管理', path: 'metadata/infoCode', component: null, children: []},
            {name: '数据规范', path: 'metadata/dataStandard', component: null, children: []},
            {name: '数据资源', path: 'metadata/dataSources', component: null, children: []},
        ]},
    {name: '数据标准化管理', path: 'standard', component: null, children: [
            {name: '数据对标', path: 'standard/benchmarking', component: null, children: []},
            {name: '技术元目录', path: 'standard/metadata', component: null, children: []},
            {name: '数据地图', path: 'standard/dataMap', component: null, children: []},
            {name: '依标建库', path: 'standard/database', component: null, children: []},
        ]},
    {name: '数据编目管理', path: 'catalogue', component: null, children: [
            {name: '本地数据目录', path: 'catalogue/local', component: null, children: []},
            {name: '数据编目上报', path: 'catalogue/report', component: null, children: []},
            {name: '数据申请', path: 'catalogue/apply', component: null, children: []},
        ]},
    {name: '数据监控管理', path: 'monitor', component: null, children: [
            {name: '服务器监控配置', path: 'monitor/server', component: null, children: []},
            {name: '数据源监控配置', path: 'monitor/dataSource', component: null, children: []},
            {name: '运行监控结果', path: 'monitor/run', component: null, children: []},
            {name: '监控总量统计', path: 'monitor/total', component: null, children: []},
            {name: '数据总量一致性监控', path: 'monitor/uniformity', component: null, children: []},
        ]},
    {name: '数据质量监控管理', path: 'quality', component: null, children: [
            {name: '数据质量评估', path: 'quality/assessment', component: null, children: []},
            {name: '校验方法管理', path: 'quality/method', component: null, children: []},
            {name: '基础监测方案管理', path: 'quality/basicsProgramme', component: null, children: []},
            {name: '数据质量监测任务管理', path: 'quality/task', component: null, children: []},
            {name: '数据质量监测日志管理', path: 'quality/log', component: null, children: []},
            {name: '问题数据查询', path: 'quality/problem', component: null, children: []},
            {name: '数据质量监测报告', path: 'quality/presentation', component: null, children: []},
        ]},
    {name: '系统管理', path: 'system', component: null, children: [
            {name: '系统码表管理', path: 'system/codeTable', component: null, children: []},
            {name: '规范管理', path: 'system/standard', component: null, children: []},
            {name: '规范映射管理', path: 'system/standardMapping', component: null, children: []},
            {name: '数据元管理', path: 'system/dataElement', component: null, children: []},
        ]},
    ];
export const sourceTypes = [
        {name: 'SQLServer', form: SqlServerForm},
        {name: 'HBase', form: HBaseForm},
        {name: 'Oracle', form: OracleForm},
        {name: 'Mysql', form: MysqlForm},
        {name: 'PostgreSql', form: PostgreSqlForm},
        {name: 'Hana', form: HanaForm},
        {name: 'Gbase', form: GbaseForm},
        {name: 'Solr', form: SolrForm},
        {name: 'ZooKeeper', form: ZookeeperForm},
        {name: '阿里云OSS', form: AliyunForm},
    ];
