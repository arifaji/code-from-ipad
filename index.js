const mongoose = require('mongoose');

mongoose.connect('mongodb://killer:CYddN46XoijQppFP@cluster0-shard-00-00.pdugx.mongodb.net:27017,cluster0-shard-00-01.pdugx.mongodb.net:27017,cluster0-shard-00-02.pdugx.mongodb.net:27017/sample_analytics?ssl=true&replicaSet=atlas-r347bt-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not to connect mongodb', err));

const accountsSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  account_id: String,
  limit: String,
  products: [ String ]
});

const Accounts = mongoose.model('Accounts', accountsSchema);

async function getAccount() {
  const accounts = await Accounts.find({ _id: '5ca4bbc7a2dd94ee581623b6'});
  console.log(accounts)
}

getAccount()