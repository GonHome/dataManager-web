import pathRegexp, {compile} from 'path-to-regexp';

// 参数 json转 a=1&b=2
const compileOptions = (options: any) => Object
    .keys(options)
    .map(key => `${key}=${options[key]}`)
    .join('&');

// 将hash对象参数转为url
export const compileHash = (route: any) => {
    const {path, keys, options} = route;
    // compile pathRegexp.compile
    const toPath = compile(path);
    // 将参数用keys 替换回去
    const query = compileOptions(options);
    return `#/${toPath(keys)}${query === ''
        ? ''
        : `?${query}`}`;
};

const parseRouteKeys = (pathString: string, result: any) => {
    const {keys, regexp} = result;
    const regexpResult = regexp.exec(pathString);
    // 保证 i不超过 regexpResult 数组长度
    return keys.reduce((obj: any, key: any, i: any) => ({
        ...obj,
        [key.name]: i + 1 < regexpResult.length
            ? regexpResult[i + 1]
            : '',
    }), {});
};

// ?之后的参数 a=1&b=2 [x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
// array.reduce(function,initvalue); 将参数转为一个 json对象
const parseRouteOptions = (optionsString: string) => optionsString
    .split('&')
    .map(str => str.split('='))
    .filter(keyValuePair => keyValuePair.length === 2)
    .reduce((obj, keyValuePair) => ({
        ...obj,
        [keyValuePair[0]]: keyValuePair[1],
    }), {});

// 假设请求地址为 /#abc?a=1 hasParts=hash.split("?") => ["#abc","a=1"]
export const parseRoute = (hash: string, paths: any[]) => {
    const hashParts = hash.split('?');
    const pathString = hashParts[0]; // pathString #/abc 这个地址
    const optionsString = hashParts.length > 1
        ? hashParts[1]
        : '';
    // paths RouterConstants 中配置的路径，在这里使用pathRegexp 与 location的hash做比较
    const result = paths.map((item) => {
        const keysAll: pathRegexp.Key[] | undefined = [];
        const regexp = pathRegexp(item, keysAll);
        return {path: item, regexp, keys: keysAll};
    }).find(item => item.regexp.test(pathString));
    const path = result
        ? result.path
        : pathString;
    const keys = result
        ? parseRouteKeys(pathString, result)
        : {};
    const options = parseRouteOptions(optionsString);

    return {path, keys, options};
};
