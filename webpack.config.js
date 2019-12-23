const path=require('path');
module.exports = {
    devtool:'source-map',
    entry:{
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            test: /\.js?$/,
            use:[
                {
                    loader: 'babel-loader',
                    options:{ presets:['env']}
                }
            ],
            exclude: /node_modules/            
            
        }]
    },
}