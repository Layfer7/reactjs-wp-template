const path = require("path");

function devServer(isDev){
    return({
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
    })
}
module.exports = devServer;