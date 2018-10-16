const mongoose = require('mongoose');

const { Schema } = mongoose;

const mongodbOption = { useNewUrlParser: true, useFindAndModify: false };

const blogDB = mongoose.createConnection('mongodb://localhost:27017/robotDB', mongodbOption);

const userSchema = new Schema({
  id: String,
  // 现金，每天签到送的枫叶都存在这里
  cash: {
    type: Number,
    default: 0,
  },
  // 签到时间，用来判断每天的签到情况
  signIn: {
    type: String,
    default: '',
  },
  // 装备
  armor: {
    type: String,
    default: '',
  },
  // 天赋
  talent: {
    type: String,
    default: '',
  },
  // 攻击
  AC: {
    type: Number,
    default: 0,
  },
  DE: {
    type: Number,
    default: 0,
  },
  versionKey: false,
});


mongoose.Promise = global.Promise;


const User = blogDB.model('user', userSchema);

module.exports = { User };
