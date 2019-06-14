const jwt = require('jsonwebtoken');
const {Cards} = require('../db/sequelize')


module.exports = async function(req, res,next){

    jwt.verify(req.token, 'secretkey', async (err, authData) => {

            if(err){
                res.sendStatus(401);
            }
            else {
                    let response = await Cards.findOne({
                        where: {
                            authorId: authData.user.id.toString()
                        },
                        attributes: ['id']
                    })
                    // console.log("response : ",response.id)
                    // console.log("authData.user.id: ", authData.user.id)
                    // console.log("req.params.id: ", req.params.id)
                    // console.log(response.id == req.params.id)
                    if(response.id == req.params.id){
                        next()
                        // console.log("okay")
                        // return true
                    }else{
                        //console.log('error')
                        res.status(400).send("You can't do it");
                    }
            }

    });
}