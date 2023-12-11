const path = require("path");

function resolve() {
    return({
        alias: {
        Vendor: path.resolve(__dirname, 'node/modules'),
        }
    })
}

module.exports = resolve;