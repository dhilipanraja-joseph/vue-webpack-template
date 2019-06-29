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
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}