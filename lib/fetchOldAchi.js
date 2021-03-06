var fetchUrpData = require('./core/fetchUrpData');

async function fetchOldAchi(req,res,cookie){
	var url = "http://urp.shou.edu.cn/gradeLnAllAction.do?type=ln&oper=qbinfo&lnxndm=2016-2017%D1%A7%C4%EA%C7%EF(%C1%BD%D1%A7%C6%DA)";
    return await fetchUrpData(req,res,url,cookie,analysis)
}

function analysis($){
   var list = [];
   var info = [];
   $('#tblHead').map(function(){
       list.push({
       	  title: $(this).text().trim()
       })
   })
   $('#user').map(function(){
       var tmp = [];
       $(this).children('tbody').children('tr').each(function(i){
           tmp.push({
           	  'kch':$(this).children('td:nth-child(1)').text().trim(),
        		  'kxh':$(this).children('td:nth-child(2)').text().trim(),
        		  'kcm':$(this).children('td:nth-child(3)').text().trim(),
        		  'ywkcm':$(this).children('td:nth-child(4)').text().trim(),
        		  'xf':$(this).children('td:nth-child(5)').text().trim(),
        		  'kcsx':$(this).children('td:nth-child(6)').text().trim(),
        		  'cj':$(this).children('td:nth-child(7)').text().trim()
           })
       })
       info.push(tmp)
   })
   for(var i=0;i<list.length;i++){
       list[i]['content'] = info[i];
   }
   // list[0].content = info[0];
   return list
}

module.exports = fetchOldAchi