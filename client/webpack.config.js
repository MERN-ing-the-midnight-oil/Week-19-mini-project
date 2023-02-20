const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = () => {
	return {
		mode: "development",
		entry: {
			//notice there are three entry points because there are three parts not dependednt on each other
			main: "./src/js/index.js",
			install: "./src/js/install.js",
			cards: "./src/js/cards.js",
		},

		// TODO: Add the correct output
		output: {
			filename: "[name]bundle.js",
			path: path.resolve(__dirname, "dist"),
		},

		// TODO: Add the correct plugins//plugins are about processing modules after they have been loaded. definitely need the HtmlWebpackPlugin,
		plugins: [
			new HtmlWebpackPlugin({
				//don't forget to do npm i -D html-webpack-plugin
				template: "./index.html",
				title: "Webpack Plugin",
			}),
		],

		// TODO: Add the correct modules// need rules for CSS, rule for Images, and rule transpile es6 to es5 using babel
		module: {
			rules: {
				test: /\.css$/i,
				use: ["style-loader", "css-loader"], //style loader inserts style tags into dom at runtime// dont forget to install these loaders as packages
			},
		},
	};
};
