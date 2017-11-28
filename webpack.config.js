var path = require('path');
var  webpack = require('webpack');
var env = 'development';
var config =  {
    context: path.resolve(__dirname, './src'),
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, './www'),
        filename: 'build.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {test: /\.html$/, use: 'vue-template-loader'},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]',},
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: {
                loaders: {
                    scss: 'style!css!sass'
                }
            }
        }),
        new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: '"development"'
                }
            }
        )
    ],
    devServer: {
        // historyApiFallback: {
        //     index: 'index2.html',
        // }, // cannot GET *url* after press f5
        hot: true,
        // enable HMR on the server
        host: "localhost", // default
        port: 8080, // default
        contentBase: path.join(__dirname, 'www'), // отдает по умолчанию(можн указ люб папку), если нет бандлов
        // proxy: [{
        //     path: '*',
        //     target: 'http://localhost:3000',
        // }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'  // Resolving the vue var for standalone build
        }
    },
    // vue: {
    //     loaders: {
    //         js: 'babel'
    //     }
    // }
}
module.exports = config;

// if (env === 'production') {
//     var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
//
//     config.plugins.push(new UglifyJsPlugin({minimize: true}));
//     config.plugins.push(new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }
//     ));
// }

// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.vue$/,
//                 loader: 'vue-loader'
//             }
//         ]
//     }
// }