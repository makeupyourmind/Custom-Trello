module.exports = function(req, res, next){
    //Get auth
    const bearerHeader = req.headers['authorization'];

     if(typeof bearerHeader !== 'undefined'){

        const bearer = bearerHeader.split(' ');
        //get token array
        const bearerToken = bearer[1];
       
        //set token
        req.token = bearerToken;
        //next
        next();
     }
     else {
       res.sendStatus(401);
     }
}
