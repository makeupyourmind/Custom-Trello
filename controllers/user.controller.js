const User = require('../db/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserController{

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
            if(req.body.password != undefined){
                req.body.password = bcrypt.hashSync(req.body.password, 10);
            }
            let response = await User.update(req.body,
            {
                where: {id: req.params.id}
            })
            res.send(response)
         }
         catch(e){
             res.status(400).send(e.message)
         }
    }

    async updateAll(req, res){
        try{
            if(req.body.password != undefined){
                req.body.password = bcrypt.hashSync(req.body.password, 10);
            }
            let response = await User.update(req.body,
            {
                where: {id: req.params.id}
            })
            res.send(response)
         }
         catch(e){
             res.status(400).send(e.message)
         }
    }

    async delete(req, res){
        User.
        findByPk(req.params.id)
        .then(user => {
            return user.destroy()
        })
        .then(result => {
            res.send(result)
        })
        .catch(e => {
            res.status(400).send('user not exist')
        })
          
        // console.log(req.params.id)
        // try{
        //     let response = await User.destroy({
        //         where: {
        //             id: req.params.id
        //         },
        //         truncate: true
        //     })
        //     res.sendStatus(200).send(response)
        //  }
        //  catch(e){
        //      res.status(400).send(e.message)
        //  }
    }

}

module.exports = new UserController;