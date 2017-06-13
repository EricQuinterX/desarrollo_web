var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var DEVELOPMENT = process.env.NODE_ENV == 'development';
var PRODUCTION = process.env.NODE_ENV == 'production';

var _entry = PRODUCTION
    ?   [ './src/index.js' ]
    :   [
            './src/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080'
        ];

var _plugins = PRODUCTION
    ?   [ 
            new webpack.optimize.UglifyJsPlugin({
                comments: true,
                mangle: false,
                compress: { warnings: true }
            }),
            new ExtractTextPlugin('style-[contenthash:10].css'),
            new HTMLWebpackPlugin({ template: 'index-template.html' })
        ]
    :   [ new webpack.HotModuleReplacementPlugin() ];

_plugins.push(
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(DEVELOPMENT),
        PRODUCTION: JSON.stringify(PRODUCTION)
    })
);

// name class css for production and development
const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';   

// Extract Text from css file
const cssLoader = PRODUCTION
    ?   ExtractTextPlugin.extract({ use: 'css-loader?localIdentName=' + cssIdentifier })
    :   ['style-loader', 'css-loader?localIdentName=' + cssIdentifier];


var config = {
    externals: {
      'jquery' : 'jQuery'  
    },
    devtool: 'source-map',
    entry: _entry,
    plugins: _plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        },{
            test: /\.(png|jpg|gif)$/,
//            loaders: ['file-loader'],
            loaders: ['url-loader?limit=1000&name=imagenes/[hash:12].[ext]'],
            exclude: '/node_modules/'
        },{
            test: /\.css$/,
            loaders: cssLoader,
            exclude: '/node_modules/'
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: PRODUCTION ? '/' : '/dist/',
        filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
    }    
};


module.exports = config;