module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
};