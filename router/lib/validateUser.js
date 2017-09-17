var db = require('../../lib/db/data.js')

async function validateUser(req,user,pwd){
   var { username, password } = await req.app.locals.db.User.findOne({username: user}).exec();
   if(password === pwd){
       return {
       	  pass: true
       }
   }else{
   	   return {
   	   	   pass: false
   	   }
   }
}

module.exports = validateUser