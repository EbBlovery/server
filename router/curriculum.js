var getCurri = require('./lib/getCurri');

async function curriculum(req,res){
    await getCurri(req,res);
}


module.exports = curriculum;