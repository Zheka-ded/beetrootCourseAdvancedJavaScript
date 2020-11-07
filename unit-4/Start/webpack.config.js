const path = require('path');

module.exports =  (env = {mode: 'development'})  => {
    const isProduction = env.mode === 'production';
    return {
        entry: "./src/index.js",
        output: {
            path:   __dirname + "/dist",
            filename:"bundle.js"
        },
    }
}
