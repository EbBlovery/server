var fetchUrpData = require('./core/fetchUrpData');

async function fetchUserInfo(req,res,cookie){
    var url = 'http://urp.shou.edu.cn/xjInfoAction.do?oper=xjxx';
    return await fetchUrpData(req,res,url,cookie,analysis);
}

function analysis($){
   var list = [];
   $('#tblView tbody tr').each(function(){
   	   list.push($(this).text().trim())
   })
   console.log(list)
}

module.exports = fetchUserInfo;