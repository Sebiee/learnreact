
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./app/index.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint"
			}
		],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
		        test: /\.less$/,
		        exclude: /node_modules/,
		        loader: 'style!css!less'
		    }
		]
	},
	eslint: {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: false
    },
	plugins: [
		new HtmlWebpackPlugin({template: 'index.tpl.html', inject: '#root'})
	],
	resolve: {
		extensions: ['','.js','.es6','.less']
	}
}