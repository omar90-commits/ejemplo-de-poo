const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src/app.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.css$/,
				use: { loader: 'style-loader', loader: 'css-loader' }
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: '/images',
					outputPath: 'images'
				}
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		open: true,
		hot: true,
		compress: true,
		port: 9000
	}
}