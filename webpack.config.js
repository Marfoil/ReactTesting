const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = filename => path.join(__dirname, `public/${filename}`);

module.exports = () => {
	// call dotenv and it will return an Object with a parsed key
	const env = dotenv.config().parsed;

	// reduce it to a nice object, the same as before
	const envKeys = Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});

	return {
		entry: './src/app.jsx',
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.[hash:8].js',
			chunkFilename: '[id].[hash:8].chunk.js'
		},

		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.jsx$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: ['style-loader', 'css-loader', 'sass-loader']
				}
			]
		},
		devtool: 'cheap-module-eval-source-map',
		devServer: { contentBase: path.join(__dirname, 'public'), open: true },
		mode: 'development',
		resolve: {
			extensions: ['.jsx', '.js', '.json']
		},
		plugins: [
			new webpack.DefinePlugin(envKeys),
			new CopyPlugin([{ from: 'src/server.js', to: './' }]),

			new HtmlWebpackPlugin({
				template: publicPath('index.html'),
				favicon: publicPath('img/react-logo.png')
			}),
			new webpack.ProgressPlugin()
		]
	};
};
