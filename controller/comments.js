var Pets = require('../models/pets')
var Users = require('../models/users')

exports.postComment = function (req, res) {
    var comment = req.body.comment
    var idPet = req.params.id
    var idUser = req.cookies.userId

    Users.findOne({ _id: idUser })
        .then(dataUser => {
            var commentObj = {id: dataUser.id , avt: dataUser.avt, name: dataUser.name, comment: comment }
            Pets.findOne({_id: idPet})
            .then(dataPet => {
                dataPet.comments.push(commentObj)
                Pets.updateOne({_id: idPet},dataPet)
                .then(()=>{
                    res.redirect(`/home/${idPet}`)
                })
            })
        })
}


exports.postCommentDel = function(req, res){
    let index = req.params.index
    let id = req.params.id
    var idUser = req.cookies.userId

    Pets.findOne({_id : id})
    .then(data =>{

        if(data.comments[index].id === idUser){
            data.comments.splice(Number.parseInt(index),1)
            Pets.updateOne({_id:id},{comments: data.comments})
            .then(()=>{
                res.redirect(`/home/${id}`)
            })
        }else{
            res.redirect(`/home/${id}`)
        }
        
    })
}