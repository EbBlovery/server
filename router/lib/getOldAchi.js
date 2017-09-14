var fetchOldAchi = require('../../lib/fetchOldAchi');

async function getOldAchi(req,res){
    var {login} = req.cookies;
    console.log(login);
    return await fetchOldAchi(req,res,login)
}

module.exports = getOldAchi;