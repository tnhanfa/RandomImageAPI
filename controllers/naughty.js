const { errorHandler } = require("../utils");

exports.naughty = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../images/naughty.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"tnhan","url":`${link}`});
};