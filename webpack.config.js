
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        front: './src/test.js'
    },
    // mode:"development",
    output: { path: `${__dirname}/dist`, filename: 'index.js' },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [{ loader: 'babel-loader' }],
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'less-loader'] }),
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        }, {
            test: /\.(jpg|png|gif)$/,
            use: ['file-loader?name=images/[name].[ext]'],
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            use: ['file-loader?name=fonts/[name].[ext]'],
        }],
    },
     resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'index.css' }),
        new HtmlWebpackPlugin({
            chunks: ['front'],
            filename: 'index.html',
            template: path.join(__dirname, '/index.html'),
        })
    ] 
};
