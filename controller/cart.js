var Users = require('../models/users')
var Pets = require('../models/pets')
let util = require('../util/util')



exports.getCart = ((req, res)=>{
    let id = req.cookies.userId
    
    Users.findOne({_id: id}).then(data=>{
        console.log(data.cart);
        res.render('./cart/cart',{data: data.cart, idUser: id, convertPrice: util.convertPrice})
    })
    
})

exports.postCartdel = ((req,res)=>{
    let idUser = req.cookies.userId
    let indexPet = req.params.indexpet

    Users.findOne({_id: idUser}).then(dataUser =>{
        let newData = dataUser.cart
        newData.splice(Number.parseInt(indexPet),1)
        
        Users.update({ _id: idUser }, { cart: newData}).then(data => {
            res.redirect(`/cart`)
        })
    })

})

exports.postCart = ((req, res) => {
    let idUser = req.cookies.userId
    let idPet = req.params.id


    Pets.findOne({ _id: idPet }).then(dataPet => {
        Users.findOne({ _id: idUser }).then(dataUser => {
            Users.update({ _id: idUser }, { cart: dataUser.cart.concat([dataPet]) }).then(data => {
                res.redirect(`/home`)
            })
        })

    })

})