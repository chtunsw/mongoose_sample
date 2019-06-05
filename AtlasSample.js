'use strict';

// getting-started.js
const mongoose = require('mongoose');
const { Schema } = mongoose

const uri = "mongodb://user123:user123@cluster0-shard-00-00-dfmqy.mongodb.net:27017,cluster0-shard-00-01-dfmqy.mongodb.net:27017,cluster0-shard-00-02-dfmqy.mongodb.net:27017/employee?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";
mongoose.connect(uri, { useNewUrlParser: true }); //连接test数据库

var db = mongoose.connection; //检测连接是否成功
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});

//对数据库进行操作
(async () => {
    //定义schema
    const kittySchema = new Schema({
        name: String,
        age: Number
    });

    //使用schema定义model
    const kittyModel = mongoose.model('', kittySchema, 'Kitty');
    //第一个参数为智能collection名会变复数，第三个参数为强制collection名
    //第二个参数Schema为document模板

    //在model下新建instance
    const cat1 = new kittyModel({
        name: "cat1"
    })

    //在数据库中保存instance
    await cat1.save();

    //修改instance
    cat1.name = 'cat what'
    cat1.age = 21

    await cat1.save()

    //查询
    //kittyModel.find({ name: 'cat one' }, function (err, docs) { console.log(docs) })
    //修改
    //kittyModel.updateMany({ name: 'cat one' }, { age: 5 }, function (err, raw) { console.log(raw) });
    //删除
    //kittyModel.deleteMany({ name: 'cat one' }, function (err,raw) { });

    //如果要用async/await, 需要在query后面加上exec(), 使query结果转为response
    //await kittyModel.find({ name: 'cat one' }, function (err, docs) { console.log(docs) }).exec()

    //关闭数据库连接
    //db.close() 
})();
