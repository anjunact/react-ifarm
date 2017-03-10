const path = require('path');
const webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const publicUrl = '../public';

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
      bundle:[
        './index.js'
      ]
    },
    output: {
        path: path.resolve(__dirname, './build'),
        publicPath: '/',
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use:  'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader' ],

            },
            {
                test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2)$/,
                use:[
                    {
                        loader:'file-loader',options:{name: 'static/media/[name].[hash:8].[ext]'}
                    }
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ],
    },
    resolve: {
        // modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
    plugins:[
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template:publicUrl+ '/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        // contentBase: path.resolve(__dirname, './build'),
        contentBase: path.join(__dirname, "build"),
        publicPath: '/',
        compress: true,
        host: "0.0.0.0",
        // port: 3000,
        historyApiFallback: true,
        inline:true,
        noInfo: true,
        overlay: true,
        quiet: true,

        // proxy: {
        //   "/api": "http://wxajs.cn/api",
        // },
        // proxy: [
        //   {
        //     context: '/api',
        //     target: 'http:/spchina.cn/api',
        //     secure: false
        //   }
        // ]
    },
};

