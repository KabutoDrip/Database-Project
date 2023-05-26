const validator = require('../helpers/validate');

const saveSample = (req, res, next) => {
    const validationRule = {
        "s1item1": 'required|string',
        "s1item2": 'required|string',
        "s1item3": 'required|string',
        "s1item4": 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if(!status) {
            res.status(412).send({
                success: false, 
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveSample
};