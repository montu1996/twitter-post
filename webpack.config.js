const path = require('path');

module.exports = [
    {
        entry : './js/block.jsx',
        output: {
            path    : path.resolve(__dirname,'js'),
            filename: 'block.build.js',
        },
        module: {
            loaders: [
                {
                    test   : /.jsx$/,
                    loader : 'babel-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        node: {
            fs: "empty",
            net: "empty",
            tls: "empty",
        }
    }
];
