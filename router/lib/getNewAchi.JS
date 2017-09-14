
var fetchUrpAchi = require('../../lib/fetchNewAchi');

async function getNewAchi(req,res){
    // var { JSESSONID } = req.cookies;
    var data = await fetchUrpAchi(req,res);
}

module.exports = getNewAchi;