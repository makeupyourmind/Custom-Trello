const {Notifications} = require('../db/sequelize')

class NotificationsController{
    
    async create(req, res){
        try {
            let resposne = await Notifications.create(req.body);

            res.send(resposne)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async getAll(req, res){
        try {
            let resposne = await Notifications.findAll();

            res.send(resposne)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async getById(req, res){
        try{
           let response = await Notifications.findByPk(req.params.id)
           res.send(response)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    }
    
    async updateSomething(req, res){
        try {
            //await confirmUser(req,res)
            let response = await Notifications.update(req.body,
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
            let response = await Notifications.update(req.body,
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
            let response = await Notifications.findByPk(req.params.id)
            await response.destroy()
            res.status(200).send("okay")
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}

module.exports = new NotificationsController