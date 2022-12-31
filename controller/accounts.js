var Users = require('../models/users')

exports.getAccount = ((req, res)=>{
    Users.find({}).then(data=>{
        res.render('./accounts/account',{data: data})
    })
    
})

exports.getAccountView = ((req, res)=>{
    let id = req.params.id
    Users.findOne({_id: id})
    .then(data => {
        res.render('./accounts/accountView',{data:data})
    })
})

exports.getAccountDel = ((req, res)=>{
    let id = req.params.id
    Users.findOne({_id: id})
    .then(data => {
        res.render('./accounts/accountDel',{data: data})
    })
})

exports.postAccountDel = ((req, res)=>{
    let id = req.params.id
    Users.deleteOne({_id:id}).then(data=>{
        res.redirect('/account')
    })
})