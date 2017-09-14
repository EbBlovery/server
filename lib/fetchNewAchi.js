var fetchUrlData = require('./core/fetchUrpData');

async function fetchNewAchi(req,res){
   var url = 'http://urp.shou.edu.cn/bxqcjcxAction.do';
   var data = await fetchUrlData(req,res,url);
}

module.exports = fetchNewAchi