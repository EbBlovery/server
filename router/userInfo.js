var getUserInfo = require('./lib/getUserInfo');

async function userInfo(req,res){
    await getUserInfo(req,res)
}

module.exports = userInfo;