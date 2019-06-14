const {User} = require('../db/sequelize');
const bcrypt = require('bcrypt');

class UserHelper {
    async login(req, res){
        try{
            let response = await User.findOne({
                where: {email: req.body.email},
                attributes: ['id','nickname', 'password', 'email', 'createdAt', 'updatedAt']
            })
            if(response !== null){
            
                let compare =  await this.compareHash(req.body.password, response.password)

                if( compare === true){
                    return response;
                }
                else {
                    res.status(401).send("Bad Request");
                }
            }
            else{
                res.status(401).send("Bad Request");
            }
        }
        catch(e){
            res.status(500).send(e.message);
        }
    }

    async compareHash(password, hash){
        return bcrypt.compare(password, hash);
    }
}

module.exports = new UserHelper;