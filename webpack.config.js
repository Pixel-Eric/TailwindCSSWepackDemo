const { resolve }= require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
process.env.NODE_ENV = 'development';
module.exports = {
    entry:'./src/app.ts',
    output:{
        filename:'bundle.js',
        path:resolve(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.ts$/,
                use:[
                    'ts-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                  [
                                    'postcss-preset-env',
                                    {
                                    },
                                  ],
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'./css/my.css'
        })
    ],
    devServer:{
        port: 3001,
        open: true
    },
    mode: 'development'
}