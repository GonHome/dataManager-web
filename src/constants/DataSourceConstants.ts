import Machine from '../components/dataSource/center/submodule/metadata/Machine';
import AppSystem from '../components/dataSource/center/submodule/metadata/AppSystem';
import Source from '../components/dataSource/center/submodule/metadata/Source';
import DataObject from '../components/dataSource/center/submodule/metadata/DataObject';
import InfoCode from '../components/dataSource/center/submodule/metadata/InfoCode';
import DataStandard from '../components/dataSource/center/submodule/metadata/DataStandard';
import Resources from '../components/dataSource/center/submodule/metadata/Resources';
import Benchmarke from '../components/dataSource/center/submodule/standard/Benchmarke';
import Metadata from '../components/dataSource/center/submodule/standard/Metadata';
import DatabaseInfo from '../components/dataSource/center/submodule/standard/DatabaseInfo';
import Local from '../components/dataSource/center/submodule/catalogue/Local';
import Report from '../components/dataSource/center/submodule/catalogue/Report';
import Apply from '../components/dataSource/center/submodule/catalogue/Apply';
import Total from '../components/dataSource/center/submodule/monitor/Total';
import Uniformity from '../components/dataSource/center/submodule/monitor/Uniformity';
import Assessment from '../components/dataSource/center/submodule/quality/Assessment';
import Method from '../components/dataSource/center/submodule/quality/Method';
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
            {name: '服务器注册管理', path: 'metadata/machine', component: Machine, children: []},
            {name: '应用系统注册管理', path: 'metadata/appSystem', component: AppSystem, children: []},
            {name: '数据源注册管理', path: 'metadata/dataSource', component: Source, children: []},
            {name: '数据对象注册管理', path: 'metadata/dataObject', component: DataObject, children: []},
            {name: '信息代码注册管理', path: 'metadata/infoCode', component: InfoCode, children: []},
            {name: '数据规范', path: 'metadata/dataStandard', component: DataStandard, children: []},
            {name: '数据资源', path: 'metadata/dataResources', component: Resources, children: []},
        ]},
    {name: '数据标准化管理', path: 'standard', component: null, children: [
            {name: '数据对标', path: 'standard/benchmarke', component: Benchmarke, children: []},
            {name: '技术元目录', path: 'standard/metadata', component: Metadata, children: []},
            {name: '数据地图', path: 'standard/dataMap', component: null, children: []},
            {name: '依标建库', path: 'standard/database', component: DatabaseInfo, children: []},
        ]},
    {name: '数据编目管理', path: 'catalogue', component: null, children: [
            {name: '本地数据目录', path: 'catalogue/local', component: Local, children: []},
            {name: '数据编目上报', path: 'catalogue/report', component: Report, children: []},
            {name: '数据申请', path: 'catalogue/apply', component: Apply, children: []},
        ]},
    {name: '数据监控管理', path: 'monitor', component: null, children: [
            {name: '服务器监控配置', path: 'monitor/server', component: null, children: []},
            {name: '数据源监控配置', path: 'monitor/dataSource', component: null, children: []},
            {name: '运行监控结果', path: 'monitor/run', component: null, children: []},
            {name: '监控总量统计', path: 'monitor/total', component: Total, children: []},
            {name: '数据总量一致性监控', path: 'monitor/uniformity', component: Uniformity, children: []},
        ]},
    {name: '数据质量监控管理', path: 'quality', component: null, children: [
            {name: '数据质量评估', path: 'quality/assessment', component: Assessment, children: []},
            {name: '校验方法管理', path: 'quality/method', component: Method, children: []},
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
