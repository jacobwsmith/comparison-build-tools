var CommonsChunkPlugin = require("/usr/local/lib/node_modules/webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        dashboard: "./dashboard/app/app.js",
        accounts: "./accounts/app/app.js"
    },
    output: {
        filename: "./dist/[name].entry.chunk.js"
    },
    module: {
        loaders: [
            { 
                // npm install css-loader style-loader --save-dev
                test: /\.css$/, 
                loader: "style!css" 
            },
            
            // Not compiling fonts and images yet
            // {
            //     // npm install url-loader --save-dev
            //     test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            //     // loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            //     loader: 'url-loader?limit=30000&name=./dist/[name].[ext]'
            // }
        ]
    },
    // THIS IS COOL!
    // If your entry chunks have some modules in common, 
    // there is a cool plugin for this. The CommonsChunkPlugin 
    // identifies common modules and put them into a commons 
    // chunk. You need to add two script tags to your page, one 
    // for the commons chunk and one for the entry chunk.
    plugins: [
        new CommonsChunkPlugin("./dist/commons.chunk.js")
    ]
};