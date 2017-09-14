
async function getNewAchi(req,res){
    var { JSESSONID } = req.cookies;
    console.log(JSESSONID,12313);
}

module.exports = getNewAchi;