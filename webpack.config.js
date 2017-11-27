var  path = require('path');
module.exports = {
    context: path.resolve(__dirname, './src'),
    // This is the "main" file which should include all other modules
    entry: './app.js',
    // Where should the compiled file go?
    output: {
        // To the `dist` folder
        path: path.resolve(__dirname, './www'),
        // With the filename `build.js` so it's dist/build.js
        filename: 'build.js',
        publicPath: '/'
    },

    module: {
        // Special compilation rules
        loaders: [
            { test: /\.html$/, use: 'vue-template-loader' },
            {
                // Ask webpack to check: If this file ends with .js, then apply some transforms
                test: /\.js$/,
                // Transform it with babel
                loader: 'babel-loader',
                // don't transform node_modules folder (which don't need to be compiled)
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
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
    // vue: {
    //     loaders: {
    //         js: 'babel'
    //     }
    // }
}

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