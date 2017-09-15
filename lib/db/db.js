// var db = require('./data.js');
// var fs = require('fs');


// fs.readFile('../../data/subject.json','utf8',(err,data)=>{
//     if(err){
//     	console.log(err)
//     }else{
//     	var val = JSON.parse(data)
//     	var tmp = []
//     	val.forEach((item)=>{
//     		var { semester, kcsx, bj, dd, sj, xf, js, kxh, kcm, kch, xy } = item;
//     		var subject = new db.Subject({
//     			semester,
//     			kcsx, 
//     			bj, 
//     			dd, 
//     			sj, 
//     			xf, 
//     			js, 
//     			kxh, 
//     			kcm, 
//     			kch, 
//     			xy
//     		})
//     		tmp.push(subject.save());
//     	});
//     	Promise.all(tmp).then(res=>{
//     		console.log('finish')
//     	})
//     }
// })

var db = require('./data.js');
var fs = require('fs');


fs.readFile('../../data/address.json','utf8',(err,data)=>{
    if(err){
    	console.log(err)
    }else{
    	var val = JSON.parse(data)
    	var tmp = []
    	val.forEach((item)=>{
    		var { name, email, number, mobile, position } = item;
    		var subject = new db.Address({
    			name, 
    			email, 
    			number, 
    			mobile, 
    			position
    		})
    		tmp.push(subject.save());
    	});
    	Promise.all(tmp).then(res=>{
    		console.log('finish')
    	})
    }
})



