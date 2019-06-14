const jwt = require('jsonwebtoken');
const {Boards} = require('../db/sequelize')


module.exports = async function(req, res,next){

    jwt.verify(req.token, 'secretkey', async (err, authData) => {

            if(err){
                res.sendStatus(401);
            }
            else {
                    let response = await Boards.findOne({
                        where: {
                            authorId: authData.user.id.toString()
                        },
                        attributes: ['id']
                    })
                    console.log("response.id : ",response.id)
                    console.log("authorId: ", authData.user.id)
                    console.log(response.id == req.params.id)
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