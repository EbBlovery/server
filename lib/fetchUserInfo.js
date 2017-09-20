var fetchUrpData = require('./core/fetchUrpData');

async function fetchUserInfo(req,res,cookie){
    var url = 'http://urp.shou.edu.cn/xjInfoAction.do?oper=xjxx';
    return await fetchUrpData(req,res,url,cookie,analysis);
}

function analysis($){
   var list = [];
   $('#tblView tbody tr').each(function(){
   	   $(this).children('td').each(function(){
   	       list.push($(this).text().trim())
   	   })
   })
   var info = {};
   info['xh'] = list[1];
   info['xm'] = list[3];     
   info['ywxm'] = list[9];
   info['sfzh'] = list[13];
   info['xb'] = list[15];
   info['xslb'] = list[17];
   info['xjzt'] = list[21];
   info['mz'] = list[25];
   info['csrq'] = list[29];
   info['zzmm'] = list[31];
   info['kq'] = list[33];
   info['byzx'] = list[35];
   info['gkzf'] = list[37];
   info['gkksh'] = list[41];
   info['yb'] = list[47];
   info['rurq'] = list[51];
   info['xs'] = list[53];
   info['zy'] = list[55];
   info['nj'] = list[59];
   info['bj'] = list[61];
   info['sfyxj'] = list[63];
   info['xq'] = list[67];
   info['ssdz'] = list[73];
   return info;
}

module.exports = fetchUserInfo;