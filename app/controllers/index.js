// require
//module. exports points to different func 
let customers = require('../models/customers.js');

module.exports.index = function (req, res) {
  res.render('index');
}
module.exports.feedback = function (req, res) {
  let username = req.body.lg_username;
  console.log(username);
  let cust = customers.findOne({"username":username},(cust, err) => {
    if (err) {
      return console.error(err);
    }   
  });
  console.log("username is: " + cust.username);  
  let cdate = (new Date()).toLocaleDateString();
      res.render('feedback', {customer: cust, date: cdate });
}
module.exports.thankyou = function (req, res) {
  res.render('thankyou');
}
module.exports.registration = function (req, res) {
  res.render('registration');
}