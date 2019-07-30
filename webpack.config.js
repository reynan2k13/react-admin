var path = require('path');
var react = require('react');
var reactDom = require('react-dom')

module.exports = {

    // entry: path.resolve(__dirname, 'public') + '/js/main.jsx',
    entry: { 
        main : path.resolve(__dirname, 'public') + '/scripts/main.jsx'
        // cms : path.resolve(__dirname, 'public') + '/scripts/cms.jsx'
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'build/desktop/k.[name].build.js'
    },    
    // output: {
    //     path: path.join(__dirname, 'public'),
    //     publicPath: '/',
    //     filename: 'main_bundle/bundle.js'
    // },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'public'),
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel-loader',
                query: {
                    presets: [ ['es2015', {modules: false}] , 'react' ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom' : 'ReactDOM'
    }
};