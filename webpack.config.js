var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: ['./client/client'],
	output: {
		path: path.join('client', 'assets'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js','.jsx', 'index.js', 'index', '']
	}
}
