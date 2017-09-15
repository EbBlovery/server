var fetchOldAchi = require('../../lib/fetchOldAchi');


async function getOldAchi(req,res){
    var {login} = req.cookies;
    var { data } = await fetchOldAchi(req,res,login)
}

module.exports = getOldAchi;