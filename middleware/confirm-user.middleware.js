const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next){

    jwt.verify(req.token, 'secretkey', (err, authData) => {
            if(err){
                res.sendStatus(401);
            }
            else {
                if(authData.user.id == req.params.id){
                    next()
                    //return true
                }
                else{
                    throw res.status(400).send('You cant do it')
                }
            }
        });
}