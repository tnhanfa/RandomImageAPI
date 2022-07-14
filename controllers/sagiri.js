const { errorHandler } = require("../utils");

exports.sagiri = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../images/sagiri.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"tnhan","url":`${link}`});
};