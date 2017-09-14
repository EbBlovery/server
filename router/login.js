
var getUrpLogin = require('../lib/core/urpLogin.js');
async function Login(req,res){
	var { username, password } = req.body;
    var { data } = await getUrpLogin(username,password);
    // console.log(getUrpLogin())
    if(data.pass){
        res.cookie('JSESSONID',data.cookie,{maxAge:1000*60*60*24});
        console.log(data.cookie);
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