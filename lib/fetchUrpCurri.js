var fetchUrpData = require('./core/fetchUrpData');

async function fetchUrpCurri(req,res,cookie){
	const url = 'http://urp.shou.edu.cn/xkAction.do?actionType=6';
    return await fetchUrpData(req,res,url,cookie,analysis)
}

async function analysis($){

   
}

module.exports = fetchUrpCurri