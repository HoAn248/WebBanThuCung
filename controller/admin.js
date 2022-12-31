// https://mcdn.coolmate.me/image/April2022/meme-cho-shiba-25.jpg
var Pets = require('../models/pets')
let util = require('../util/util')


exports.getAdmin = ((req, res)=>{
    Pets.find({}).then(data=>{
        res.render('./admin/admin', {data: data, convertPrice: util.convertPrice , adminTag : '<h3>Hello :))</h3>'})
    })
})

exports.getAdminAdd = ((req, res)=>{
    res.render('./admin/adminAdd')
})
exports.postAdminAdd = ((req, res)=>{
    let name = req.body.name
    let price = req.body.price
    let title = req.body.title
    let img = req.body.img
    Pets.create({name: name, price: price, title: title, img: img})
    res.redirect('/admin')
})


exports.getAdminView = ((req, res) =>{
    let id = req.params.id;
    Pets.findOne({_id: id}).then(data =>{
        res.render('./admin/adminView',{data:data, convertPrice: util.convertPrice})
    })
})

exports.getAdminDelete = ((req , res)=>{
    let id = req.params.id;
    Pets.findOne({_id: id}).then(data =>{
        res.render('./admin/adminDel',{data: data})
    })
})

exports.postAdminDelete = ((req , res)=>{
    let id = req.params.id;
    Pets.deleteOne({_id:id}).then(data=>{
        res.redirect('/admin')
    })
})


exports.getAdminEdit = ((req, res)=>{
    let id = req.params.id;
    Pets.findOne({_id:id}).then(data=>{
        res.render('./admin/adminEdit',{data: data})
    })
    
})

exports.postAdminEdit = ((req, res)=>{
    let id = req.params.id;
    let name = req.body.name
    let price = req.body.price
    let title = req.body.title
    let img = req.body.img
    let dataPet = {}
    // name:name,price:price,title:title,img:img
    if(name){
        dataPet['name'] = name
    }
    if(price){
        dataPet['price'] = price
    }
    if(title){
        dataPet['title'] = title
    }
    if(img){
        dataPet['img'] = img
    }
    
    Pets.updateOne({_id:id},dataPet).then(data=>{
        res.redirect('/admin')
    })
    
})