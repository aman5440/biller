const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: {
        app: './src/index.js'
    },
   
    watch: true,
    devtool:    'source-map',
    output:{
        filename:   '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                "presets": [ 
                    "@babel/preset-env", 
                    "@babel/preset-react" 
                ] 
            }
        },
        {
            test: /\.(css)$/,
            loader: "style-loader!css-loader"
        }
        ]
    },
    resolve:{
        extensions:['.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        stats: {
            children: false,
            maxModules: 0
        },
        port: 3002,
        hot: true
    }
}