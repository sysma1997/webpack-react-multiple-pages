const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development", 
    devtool: "inline-source-map", 
    entry: {
        index: "./src/index.jsx", 
        "./login/index": "./src/login/index.jsx"
    }, 
    devServer: {
        static: "./dist"
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
        })
    ], 
    output: {
        filename: "[name].js", 
        path: path.resolve(__dirname, "dist"), 
        /* clean: true */
    }, 
    /* optimization: {
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
    },  */
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
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}