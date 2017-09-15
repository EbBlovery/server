var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mongooseexam',{'useMongoClient':true});

mongoose.connection.on('connected',()=>{
	console.log('Mongoose connection open to mongooseexam');
})

mongoose.connection.on('error',(err)=>{
	console.log('mongoose connected err' + err);
})

mongoose.connection.on('disconnection',()=>{
	console.log('Mongoose connection disconnected');
})

module.exports = mongoose;