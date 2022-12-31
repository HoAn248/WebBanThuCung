const pets = require('../models/pets')
let Pets = require('../models/pets')
let Users = require('../models/users')
let util = require('../util/util')

exports.getHome = ((req, res) => {
    let id = req.cookies.userId
    Users.findOne({ _id: id })
        .then(dataUser => {
            Pets.find({}).then(dataPet => {
                res.render('./home/home', { dataUser: dataUser, dataPet: dataPet, convertPrice: util.convertPrice })
            })

        })
})

exports.getHomeViewPet = ((req, res) => {
    let id = req.params.id
    let idUser = req.cookies.userId

    pets.findOne({ _id: id }).then(data => {
        res.render('./home/homeViewPet', { data: data, idUser: idUser, convertPrice: util.convertPrice, listComments: data.comments })
    })

})


exports.getHot = ((req, res) => {
    let idPets = []
    let idAllUser = []
    let idUser = req.cookies.userId
    Pets.find({}).then(dataPet => {
        let petLenght = Math.floor(dataPet.length / 2)
        let arrPet = dataPet
        arrPet.forEach(e => {
            idPets.push(e.id)
        })
        let counts = []
        idPets.forEach((e, i) => {
            counts.push({[e]:0})
        })

        Users.find({}).then(dataUser => {
            dataUser.forEach(user => {
                let carts = user.cart
                for (let i = 0; i < carts.length; i++) {
                    let cart = carts[i];
                    let id = cart._id.toString()
                    idAllUser.push(id)
                }
            })
            idAllUser.forEach((e, i) => {
                //e là id dạng chuỗi của tổng hàng khác mua

                idPets.forEach((f, j) => {

                    //f là id nhưng là của toàn bộ pet trong dtb
                    if (e === f) {
                        counts.forEach((l,i) =>{
                            let key = Object.keys(l)[0]
                            if(e === key){
                                counts[i] = {[key] : counts[i][key]+1}
                                return
                            }
                        })
                    }
                })
            })

            for (let i = 0; i < counts.length - 1; i++) {
                let id1 = Object.keys(counts[i])[0]
                for (let j = i + 1; j < counts.length; j++) {
                  let id2 = Object.keys(counts[j])[0]
            
            
                  if (counts[j][id2] > counts[i][id1]) {
            
                    let swap = counts[i]
                    counts[i] = counts[j]
                    counts[j] = swap
                    id1 = id2
            
                  }
                }
            
              }
              
            let dataPetEnd = []
            let checkLenght = 0
            counts.forEach(e =>{
                arrPet.forEach((f,i) =>{
                    if(Object.keys(e)[0] === arrPet[i]._id.toString()){
                        if(checkLenght < petLenght){
                            dataPetEnd.push(f)
                            checkLenght++;
                        }
                    }
                })
            })
            Users.findOne({_id: idUser}).then((dataUser)=>{
                res.render('./home/homeHot',{dataPet: dataPetEnd ,convertPrice: util.convertPrice, dataUser: dataUser,})

            })



        })


    })
})
