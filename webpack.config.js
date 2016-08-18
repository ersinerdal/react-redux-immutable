var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var cssnext = require('postcss-cssnext');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.NoErrorsPlugin()
]
var DEBUG = process.env.NODE_ENV === 'production' ? true : false;
if (DEBUG) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({mangle: {except: ['$super', '$', 'exports', 'require']}}));
    plugins.push(new ExtractTextPlugin('main.css'));
}
module.exports = {
    entry: [
        './app/app.js',
        'webpack/hot/dev-server'
    ],
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, './static'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.js|\.jsx$/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                loader: DEBUG ? ExtractTextPlugin.extract("style-loader", "css-loader!postcss") : "style-loader!css-loader!postcss"
            }
        ]
    },
    postcss: function () {
        return [precss, cssnext];
    },
    plugins: plugins,
    resolve: {
        root: path.resolve('./app'),
        extensions: ['', '.js', '.jsx', '.css']
    }
}
