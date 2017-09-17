var mongoose = require('./mongoose.js'),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var UserSchema = new Schema({
	username: String,
    password: String,
    name: String,
    college: String,
    updateTime: Date,
})

var SubjectSchema = new Schema({
	sememster: String,
	kcsx: {
		type: String,
		default: "未知"
	},
	bj: {
		type: String,
		default: "未知"
	},
	zc: {
		type: String,
		default: "未知"
	},
	dd: {
		type: String,
		default: "未知"
	},
	sj: {
		type: String,
		default: "未知"
	},
	xf: {
		type: String,
		default: "未知"
	},
	js: {
		type: String,
		default: "未知"
	},
	kxh: {
		type: String,
		default: "未知"
	},
	kcm: {
		type: String,
		default: "未知"
	},
	kch: {
		type: String,
		default: "未知"
	},
	xy: {
		type: String,
		default: "未知"
	}
})

var AddressSchema = new Schema({
	name: String, 
	email: {
		type: String,
		default: "未知"
	}, 
	number: {
		type: String,
		default: "未知"
    }, 
	mobile: {
		type: String,
		default: "未知"
    },
	position: {
		type: String,
		default: "未知"
    }
})

var childChildSchema = new Schema({
	cj: String,
	kch: String,
	kcm: String,
	kcsx: String,
	kxh: String,
	xf: String,
	ywkcm: String,
})

var childSchema = new Schema({
    title: String,
    content: [childChildSchema]
})

var oldAchi = new Schema({
	username: String,
	ret: [childSchema]
})


var curriSchema = new Schema({
	username: String,
	curri: Array
})

var userInfoSchema = new Schema({
	username: String,
	info: Array
})

var User = mongoose.model('User',UserSchema);
var Subject = mongoose.model('Subject',SubjectSchema);
var Address = mongoose.model('Address',AddressSchema);
var OldAchi = mongoose.model('OldAchi',oldAchi);
var Curri = mongoose.model('Curri',curriSchema);
var UserInfo = mongoose.model('UserInfo',userInfoSchema);

module.exports = {
	User,
    Subject,
    Address,
    OldAchi,
    Curri,
    UserInfo
}



