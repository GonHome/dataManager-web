const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    let eslintLoader = config.module.rules[0];
    // Add the SASS loader second-to-last
    // (last one must remain as the "file-loader")
    let loaderList = config.module.rules[1].oneOf;
    loaderList.splice(loaderList.length - 1, 0, {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
    });
    return config;
}