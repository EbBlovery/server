var fetchUrlData = require('./core/fetchUrpData');

async function fetchNewAchi(req,res,cookie){
   var url = 'http://urp.shou.edu.cn/bxqcjcxAction.do';
   return await fetchUrlData(req,res,url,cookie,analysis);
}

function analysis($){
    var list = [];
    if($('.displayTag').find('tr').length>1){
        $('.displayTag>thead>tr').each(function(item){
        	list.push({
        		'kch':$(this).children('td:nth-child(1)').text().trim(),
        		'kxh':$(this).children('td:nth-child(2)').text().trim(),
        		'kcm':$(this).children('td:nth-child(3)').text().trim(),
        		'ywkcm':$(this).children('td:nth-child(4)').text().trim(),
        		'xf':$(this).children('td:nth-child(5)').text().trim(),
        		'kcsx':$(this).children('td:nth-child(6)').text().trim(),
        		'cj':$(this).children('td:nth-child(7)').text().trim()
        	})
        })
    }
    return list.splice(1,list.length-1);
}


module.exports = fetchNewAchi