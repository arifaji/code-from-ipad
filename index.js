const mongoose = require('mongoose');
mongoose.connect('mongodb://killer:CYddN46XoijQppFP@cluster0-shard-00-00.pdugx.mongodb.net:27017,cluster0-shard-00-01.pdugx.mongodb.net:27017,cluster0-shard-00-02.pdugx.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-r347bt-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not to connect mongodb', err));