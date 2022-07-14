const { errorHandler } = require("../utils");

exports.cadao = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../text/cadao.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"tnhan","count":`${data.length}`,"data":`${link}`});
};