var User = require('../models/users')
var util = require('../util/util')
let bcrypt = require('bcrypt')

exports.getLogin = ((req, res) => {
    res.render('./users/login', { thongBao: '' })
})

exports.postLogin = ((req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    User.findOne({ email: email.trim() }).then(data => {
        if (data) {
            const checkPass = bcrypt.compareSync(password, data.password)
            if (checkPass) {
                res.cookie('userId', data._id)
                res.redirect(`/home`)
            } else {
                res.render('./users/login', { thongBao: "Password sai" })
            }
        } else {
            res.render('./users/login', { thongBao: "Vui lòng nhập dữ liệu" })
        }
    })
})

exports.getRegis = ((req, res) => {
    res.render('./users/regis')
})

exports.postRegis = ((req, res, next) => {

    var name = req.body.name
    var email = req.body.email
    var age = req.body.age
    var password = req.body.password
    var confirmPassword = req.body.confirmPassword
    User.findOne({ email: email.trim() }).then(data => {
        if (data === null) {
            User.create({
                name: name,
                email: email,
                age: Number(age),
                avt: util.randomAvt(),
                password: bcrypt.hashSync(password, 10)
            })
            res.redirect('/users/login')
        }

    })



})

