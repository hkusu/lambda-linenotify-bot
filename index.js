// Re-export with CommonJS style for AWS Lambda
module.exports.handler = require('./dist/handler').default
