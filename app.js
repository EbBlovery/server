const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
console.log(app)

app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.on('error',(err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
	res.sendFile(process.cwd() + '/public/index.html');
});

app.post('/login',require('./router/login'));
app.post('/newachi',require('./router/newAchi'));
app.post('/oldachi',require('./router/oldAchi'));


app.listen(3000,()=>{
	console.log('app listen at port: 3000')
})
