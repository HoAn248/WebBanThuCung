var Users = require('../models/users')

module.exports.requireAuth = function(req, res, next){
    if(!req.cookies.userId){
        res.redirect('/users/login')
        return;
    }
    Users.findOne({_id: req.cookies.userId}).then(data=>{
        if(data){
            next()
        }else{
            res.send(':)) fake')
        }
    })
    
}

module.exports.requireAdmin = function(req,res,next){
    Users.findOne({_id: req.cookies.userId})
    .then(data =>{
        if(data.isAdmin === true){
            next()
        }else{
            res.redirect('/home')
        }
    })
    
}