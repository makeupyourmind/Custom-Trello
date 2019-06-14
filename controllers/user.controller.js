const {User} = require('../db/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserHelper = require('../heplers/user.helper')
const confirmUser = require('../middleware/confirm-user.middleware')

class UserController{

    async test(req, res){

        try {
            //await confirmUser(req,res)
            console.log(req.body)
            res.send(req.body)
        } catch (error) {
            res.status(400).send(error.message)
        }

        // try {
        //     jwt.verify(req.token, 'secretkey', (err, authData) => {
        //              if(err){
        //             console.log("err : ", err);
        //              res.sendStatus(401);
        //             }
        //             else {
        //                 if(authData.user.id == req.params.id){
        //                     res.send("okay")
        //                 }
        //                 else{
        //                     res.status(400).send('You cant do it')
        //                 }
        //             // res.json({
        //             //     authData
        //             // });
        //             }
        //         });
        // } catch (error) {
        //     res.status(400).send(e.message)
        // }

    }

    async signUp(req, res){
        try{
           req.body.password = bcrypt.hashSync(req.body.password, 10);
           let response = await User.create(req.body);
           res.send(response)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    }

    async signIn(req, res){
        try {
            let response = await UserHelper.login(req, res);
            if(response){
                const user = response;
                jwt.sign({user}, 'secretkey',  { expiresIn: '3600s'} , (err,token) => {
                    res.json({
                        token           
                    });              
                });
            }
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async all(req, res){
        try{
          let response = await User.findAll()
          res.send(response)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    }

    async getById(req, res){
        try{
           let response = await User.findByPk(req.params.id)
           res.send(response)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    }

    async updateByParam(req, res){
        try{
            //await confirmUser(req,res)
            if(req.body.password != undefined){
                req.body.password = bcrypt.hashSync(req.body.password, 10);
            }
            let response = await User.update(req.body,
            {
                where: {id: req.params.id},
                returning: true
            })
            res.send(response)
         }
         catch(e){
             res.status(400).send(e.message)
         }
    }

    async updateAll(req, res){
        try{
            //await confirmUser(req,res)
            if(req.body.password != undefined){
                req.body.password = bcrypt.hashSync(req.body.password, 10);
            }
            let response = await User.update(req.body,
            {
                where: {id: req.params.id},
                returning: true
            })
            res.send(response)
         }
         catch(e){
             res.status(400).send(e.message)
         }
    }

    async delete(req, res){

        try {
            //await confirmUser(req,res)
            let response = await User.findByPk(req.params.id)
            await response.destroy()
            res.status(200).send("okay")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

}

module.exports = new UserController;