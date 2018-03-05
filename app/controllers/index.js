// require
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//module. exports points to different func 
let customers = require('../models/customers');
//let customers = require('mongoose').model('../models/customers.js');

module.exports.index = function (req, res) {
  res.render('index');
}
module.exports.feedback = function (req, res) {
  let username = req.body.lg_username;
  let cust = customers.find({ "username": username }, (cust, err) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("username is: " + cust[0].username);
      let cdate = (new Date()).toLocaleDateString();
      res.render('feedback', { customer: cust[0], date: cdate });
    }
  });
}
module.exports.thankyou = function (req, res) {
  res.render('thankyou');
}
module.exports.registration = function (req, res) {
  res.render('registration');
}
module.exports.register = function (req, res) {
  let cust = new customers(req.body);
  cust.save((err) => {
    if (err) {
      return console.error(err);
    }
  });
  res.render('index');
}