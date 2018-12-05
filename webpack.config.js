const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets',
        sourceMapFilename: "app.js.map"

    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 5000
    },
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader'],
                query: {
                    presets: ['latest', 'stage-0', 'react']
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader',
                query: {
                    presets: ['latest', 'stage-0', 'react']
                }


            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=src/images/[name].[ext]"
            }

        ]
    }
}