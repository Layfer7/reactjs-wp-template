const path = require("path");

function resolve() {
    return({
        alias: {
        Vendor: path.resolve(__dirname, 'node/modules'),
        },
        extensions: ['.jsx', '...'],
    })
}

module.exports = resolve;