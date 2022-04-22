const path =require('path')
module.exports={
    mode:'development',
    devtool: 'source-map',
    entry:'./Javascript/Authentication.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    watch:true
}