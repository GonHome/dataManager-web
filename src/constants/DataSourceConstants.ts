export const LEFT_MENUS = [
    {name: '元数据管理', path: 'metadata', children: [
            {name: '服务器注册管理', path: 'metadata/machine', children: []},
            {name: '应用系统注册管理', path: 'metadata/appSystem', children: []},
            {name: '数据源注册管理', path: 'metadata/dataSource', children: []},
            {name: '数据对象注册管理', path: 'metadata/dataObject', children: []},
            {name: '信息代码注册管理', path: 'metadata/infoCode', children: []},
            {name: '数据规范', path: 'metadata/dataStandard', children: []},
            {name: '数据资源', path: 'metadata/dataSources', children: []},
        ]},
    {name: '数据标准化管理', path: 'standard', children: [
            {name: '数据对标', path: 'standard/benchmarking', children: []},
            {name: '技术元目录', path: 'standard/metadata', children: []},
            {name: '数据地图', path: 'standard/dataMap', children: []},
            {name: '依标建库', path: 'standard/database', children: []},
        ]},
    {name: '数据编目管理', path: 'catalogue', children: [
            {name: '本地数据目录', path: 'catalogue/local', children: []},
            {name: '数据编目上报', path: 'catalogue/report', children: []},
            {name: '数据申请', path: 'catalogue/apply', children: []},
        ]},
    {name: '数据监控管理', path: 'monitor', children: [
            {name: '服务器监控配置', path: 'monitor/server', children: []},
            {name: '数据源监控配置', path: 'monitor/dataSource', children: []},
            {name: '运行监控结果', path: 'monitor/run', children: []},
            {name: '监控总量统计', path: 'monitor/total', children: []},
            {name: '数据总量一致性监控', path: 'monitor/uniformity', children: []},
        ]},
    {name: '数据质量监控管理', path: 'quality', children: [
            {name: '数据质量评估', path: 'quality/assessment', children: []},
            {name: '校验方法管理', path: 'quality/method', children: []},
            {name: '基础监测方案管理', path: 'quality/basicsProgramme', children: []},
            {name: '数据质量监测任务管理', path: 'quality/task', children: []},
            {name: '数据质量监测日志管理', path: 'quality/log', children: []},
            {name: '问题数据查询', path: 'quality/problem', children: []},
            {name: '数据质量监测报告', path: 'quality/presentation', children: []},
        ]},
    {name: '系统管理', path: 'system', children: [
            {name: '系统码表管理', path: 'system/codeTable', children: []},
            {name: '规范管理', path: 'system/standard', children: []},
            {name: '规范映射管理', path: 'system/standardMapping', children: []},
            {name: '数据元管理', path: 'system/dataElement', children: []},
        ]},
    ];
