
var getUrpLogin = require('../lib/core/urpLogin.js');
async function Login(req,res){
	var { username, password } = req.body;
    var { data } = await getUrpLogin(username,password);
    // console.log(getUrpLogin())
    console.log(data);
}

module.exports = Login;