const { errorHandler } = require("../utils");

exports.umaru = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../images/umaru.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Authors":"tnhan","url":`${link}`});
};