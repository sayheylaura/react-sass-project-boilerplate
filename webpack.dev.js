const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, './dist'),
		port: 3000,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.sass$/i,
				exclude: /(node_modules)/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
});
