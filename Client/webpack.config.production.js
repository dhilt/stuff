var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		//'webpack-hot-middleware/client',
		'./src/index.jsx'
	],
	output: {
		path: __dirname + '/../Server/public',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('css!sass')
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin('style.css', {
			allChunks: true
		}), 
		new webpack.ProvidePlugin({
		    'Promise': 'exports?global.Promise!es6-promise',
		    'window.fetch': 'exports?self.fetch!whatwg-fetch'
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			}
		})
	]
};