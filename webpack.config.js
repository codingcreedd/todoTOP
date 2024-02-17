const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle: ['./src/index.js', './src/DOMModule.js', './src/domMethods.js', './src/renderingDOM.js', './src/projects.js', './src/validation.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'To Do',
            filename: 'index.html',
            template: './src/template.html',
        }),
    ],
};
