
var getUrpLogin = require('../lib/core/urpLogin.js');
async function Login(req,res){
	var { username, password } = req.body;
    var { data } = await getUrpLogin(username,password);
    if(data.pass){
        var value = {
            username,
            password,
            updateTime: new Date()
        }
        console.log(value);
        res.cookie('login',data.cookie,{maxAge:1000*60*60*24});
        req.app.locals.db.User.update({username},{$set: value},{upsert: true}).exec();
        req.app.locals.user = {
            username: username,
            password: password
        }
        res.json({
        	data:{
        		pass:true,
        		username
        	}
        })
    }else{
        res.json({
        	data:{
        		pass:false
        	}
        })
    }

}

module.exports = Login;