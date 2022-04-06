'use strict';
{
    let path = require('path');

    const bundleFolder = 'wwwroot/js/';

    module.exports = {
        entry: {
            app: './Scripts/App.ts'
        },
        optimization: {
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, bundleFolder)
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx']
        },
        plugins: [],

        devtool: 'inline-source-map'
    };
}