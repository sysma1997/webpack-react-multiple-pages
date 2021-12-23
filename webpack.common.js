const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    entry: {
        index: "./src/index.tsx", 
        "./login/index": "./src/login/index.tsx"
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home", 
            filename: "index.html", 
            template: "./src/index.html", 
            chunks: ["index"]
        }), 
        new HtmlWebpackPlugin({
            title: "Login", 
            filename: "login/index.html", 
            template: "./src/index.html", 
            chunks: ["./login/index"]
        }), 
        new CopyPlugin({
            patterns: [
                { from: "backend", to: "backend" }
            ]
        })
    ], 
    output: {
        filename: "[name].[contenthash].js", 
        path: path.resolve(__dirname, "dist"), 
        clean: true
    }, 
    optimization: {
        moduleIds: "deterministic", 
        runtimeChunk: "single", 
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, 
                    name: "vendors", 
                    chunks: "all"
                }
            }
        }
    }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }, 
            {
                test: /\.css$/i, 
                use: ["style-loader", "css-loader"]
            }, 
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i, 
                type: "asset/resource"
            }, 
            { 
                test: /\.tsx?$/, 
                use: "ts-loader", 
                exclude: /node_modules/, 
            }, 
        ]
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.jsx']
    }
}