const {Boards} = require('../db/sequelize')
const confirmUser = require('../middleware/confirm-user.middleware')

class BoardsController{

   async create(req, res){
       try {
           let response = await Boards.create(req.body)
           res.send(response) 
       } catch (error) {
           res.status(400).send(error.message)
       }
   }

   async getAll(req, res){
       try {
           let response = await Boards.findAll()
           res.send(response)
       } catch (error) {
           res.status(400).send(error.message)
       }
   }

   async getById(req, res){
        try {
            let response = await Boards.findByPk(req.params.id)
            res.send(response)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    async updateSomething(req, res){
        try {
            await confirmUser(req,res)
            let response = await Boards.update(req.body,
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
            await confirmUser(req,res)
            let response = await Boards.update(req.body,
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
            await confirmUser(req,res)
            let response = await Boards.findByPk(req.params.id)
            await response.destroy()
            res.status(200).send("okay")
        } catch (error) {
            res.status(400).send(error.message)
        }
        // Boards.
        // findByPk(req.params.id)
        // .then(board => {
        //     return board.destroy()
        // })
        // .then(result => {
        //     res.status(200).send("Okay")
        // })
        // .catch(e => {
        //     res.status(400).send('Board not exist')
        // })
    }
}

module.exports = new BoardsController;