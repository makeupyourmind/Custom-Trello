const {Comments} = require('../db/sequelize')
const confirmUser = require('../middleware/confirm-user.middleware')

class CommentsController{
    async create(req, res){
        try {
            let resposne = await Comments.create(req.body);

            res.send(resposne)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async getAll(req, res){
        try {
            let resposne = await Comments.findAll();

            res.send(resposne)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async getById(req, res){
        try{
           let response = await Comments.findByPk(req.params.id)
           res.send(response)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    }
    
    async updateSomething(req, res){
        try {
            //await confirmUser(req,res)
            let response = await Comments.update(req.body,
                {
                    where: {id: req.params.id},
                    returning: true
                })
            res.send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async updateAll(req, res){
        try {
            //await confirmUser(req,res)
            let response = await Comments.update(req.body,
                {
                    where: {id: req.params.id},
                    returning: true
                })
            res.send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async delete(req, res){
        try {
            //await confirmUser(req,res)
            let response = await Comments.findByPk(req.params.id)
            await response.destroy()
            res.status(200).send("okay")
        } catch (error) {
            res.status(400).send(error.message)
        }
        // Comments
        // .findByPk(req.params.id)
        // .then(user => {
        //     return user.destroy()
        // })
        // .then(result => {
        //     res.status(200).send("okay")
        // })
        // .catch(e => {
        //     res.status(400).send('user not exist')
        // })
    }
}

module.exports = new CommentsController;