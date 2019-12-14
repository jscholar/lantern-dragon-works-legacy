/**
 * Webpack config for development
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')

const helpers = require('./helpers')
const root = helpers.root;

module.exports = {
    mode: 'development',
    entry: root('./src/index.js'),
    output: {
        filename: 'main.js',
        path: root('dist'),
        publicPath: '',
    },
    
    /**
     *  See https://webpack.js.org/configuration/devtool for source mapping options
     */
    
    devtool: 'inline-source-map',

    devServer: {
        contentBase: root('dist'),
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true,   // For functional page refreshes and get requests to routes in development mode
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]'
                            }
                        }
                    },
                    'sass-loader',
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: root('/src/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
