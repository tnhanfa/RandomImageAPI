const { errorHandler } = require("../utils");

exports.kana = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../images/kana.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"tnhan","count":`${data.length}`,"url":`${link}`});
};