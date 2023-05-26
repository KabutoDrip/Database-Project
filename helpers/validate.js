const Validator = require('validator.js');
const validator = (body, rules, customMessage, callback) => {
    const validation = new Validator(body, rules, customMessage)
    validation.passes(() => callback(null, true));
    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;