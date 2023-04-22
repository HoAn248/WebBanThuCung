var mongoose = require('mongoose')
const url = "mongodb+srv://Users:hoducan123@cluster0.thhnc7l.mongodb.net/database?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('kết nối');
})
// mongoose.connect(url)
//   .then(() => {
//     console.log('Successfully connected');
//   })
//   .catch((err) => {
//     console.error(err);
//   });
const schema = mongoose.Schema
const khungUsers = new schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    avt: {
        type: String,
        trim: true,
        required: true
    },
    cart:{
        type: Array,
        default: []
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},
    {
        collection: 'Users'
    })

var User = module.exports = mongoose.model('Users', khungUsers)


