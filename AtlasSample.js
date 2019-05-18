
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        console.error(err)
    } else {
        const collection = client.db("test").collection("devices");
        const ins = { name: 'dsds' }
        collection.insertOne(ins)
        console.log('hello?')
        client.close();
    }
});