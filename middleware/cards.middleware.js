const jwt = require('jsonwebtoken');
const {Cards} = require('../db/sequelize')


module.exports = async function(req, res,next){

    jwt.verify(req.token, 'secretkey', async (err, authData) => {

            if(err){
                res.sendStatus(401);
            }
            else {
                    let response = await Cards.findAll({
                        where: {
                            authorId: authData.user.id.toString()
                        },
                        attributes: ['id']
                    })

                    for(let i = 0; i < response.length; i++){
                        // console.log("response : ",response[i].id)
                        if(response[i].id == req.params.id){
                            next()
                        }
                    }
                    if(response.length == 0){
                        // console.log('error', i)
                        res.status(400).send("You can't do it");
                    }
            }

    });
}