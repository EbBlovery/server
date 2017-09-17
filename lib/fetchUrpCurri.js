var fetchUrpData = require('./core/fetchUrpData');

async function fetchUrpCurri(req,res,cookie){
	const url = 'http://urp.shou.edu.cn/xkAction.do?actionType=6';
    return await fetchUrpData(req,res,url,cookie,analysis)
}

async function analysis($){
   var list = [];
   $('#user').children('tbody').children('tr').each(function(){
   	   var tmp = [];
       $(this).children('td').each(function(){
       	    tmp.push($(this).text().trim());
       })
       list.push(tmp);
   })
   var len = list.splice(1,14);
   len.splice(4,1);
   len.splice(8,1);
   len.forEach((item)=>{
   	  item.splice(0,1)
   })
   len[0].splice(0,1);
   len[4].splice(0,1);
   len[8].splice(0,1);
   console.log(len)
}

module.exports = fetchUrpCurri