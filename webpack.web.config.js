const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const context = process.cwd();

module.exports = (env) => {
    return {
        context,
        mode: env.NODE_ENV || "production",
        entry: path.resolve(__dirname, "src", "bundle.js"),
        output: {
            path: path.resolve(__dirname, 'dist', 'web'),
            filename: 'index.js',
            publicPath: '/public/'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.css$/i,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        'css-loader'
                    ],
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'index.css',
                chunkFilename: '[id].css',
            }),
        ]
    }
}
