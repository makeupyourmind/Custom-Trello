const jwt = require('jsonwebtoken');
const {Columns} = require('../db/sequelize')


module.exports = async function(req, res,next){

    jwt.verify(req.token, 'secretkey', async (err, authData) => {

            if(err){
                res.sendStatus(401);
            }
            else {

                let response = await Columns.findAll({
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
                    // let response = await Columns.findOne({
                    //     where: {
                    //         authorId: authData.user.id.toString()
                    //     },
                    //     attributes: ['id']
                    // })
                    // // console.log("response : ",response.id)
                    // // console.log("authData.user.id: ", authData.user.id)
                    // // console.log("req.params.id: ", req.params.id)
                    // // console.log(response.id == req.params.id)
                    // if(response.id == req.params.id){
                    //     next()
                    //     // console.log("okay")
                    //     // return true
                    // }else{
                    //     //console.log('error')
                    //     res.status(400).send("You can't do it");
                    // }
            }

    });
}