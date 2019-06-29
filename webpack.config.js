'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const path= require('path')

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}