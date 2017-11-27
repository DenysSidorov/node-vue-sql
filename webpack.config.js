var  path = require('path');
module.exports = {
    // This is the "main" file which should include all other modules
    entry: './src/app.js',
    // Where should the compiled file go?
    output: {
        // To the `dist` folder
        path: path.resolve(__dirname, './www'),
        publicPath: 'dist/',
        // With the filename `build.js` so it's dist/build.js
        filename: 'build.js'
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