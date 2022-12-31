exports.checkLength = function (value, amount, fullLength) {
    if (value.length >= amount && value.length <= fullLength) {
        return true
    }
    return false
}


exports.isEmail = function (email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

exports.checkAge = function (value) {
    if (value > 0) {
        return true
    }
    return false
}

exports.checkConfirmPassword = function (password, confirmPassword) {
    console.log(confirmPassword);
    if (password.trim() === confirmPassword.trim()) {
        return true
    }
    return false
}

exports.convertPrice = function (price){
    const VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    

    return VND.format(price);

    
}

exports.randomAvt = function (){
   let avts =  [
    'https://i.pinimg.com/originals/c2/b7/22/c2b7221f89609a68a29efa202dfd989f.jpg',
    'https://i.pinimg.com/originals/1c/5a/3b/1c5a3bd6c0b33b06e22985fe8e592e10.jpg',
    'https://i.pinimg.com/originals/3d/b3/60/3db360e7dd3825699285bd34f441af09.jpg',
    'https://i.pinimg.com/736x/39/06/ff/3906ff56014e60bcacc05fd432dae8eb.jpg'
]
    return avts[Math.floor((Math.random()*avts.length))]
}