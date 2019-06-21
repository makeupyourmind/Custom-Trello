const { validationResult } = require('express-validator/check');

module.exports = function(req, res, next){

const errors = validationResult(req);
        if (!errors.isEmpty()) {

            let param = errors.array().map(function(current){
              return current.param;     
            })
            let msg = errors.array().map(function(error){
                return error.msg
            })
            // return  { errors: param, msg: msg }
            res.status(422).send({ errors: param, msg: msg })
        }
        else{
            next()
        }
}