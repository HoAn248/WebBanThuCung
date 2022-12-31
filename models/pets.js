var mongoose = require('mongoose')
const url = "mongodb+srv://Users:hoducan123@cluster0.thhnc7l.mongodb.net/database?retryWrites=true&w=majority"
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('kết nối');
})
const schema = mongoose.Schema
const khungPets = new schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    img:{
        type: String,
        trim: true,
        required: true
    },
    comments:{
        type: Array,
        default:[]
    }
},
    {
        collection: 'Pets'
    })

var Pets = module.exports = mongoose.model('Pets', khungPets)


