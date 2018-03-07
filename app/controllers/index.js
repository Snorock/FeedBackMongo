// require
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
mongoose.set('debug', true);
//module. exports points to different func 
let customers = require('../models/customers');
//let customers = require('mongoose').model('../models/customers.js');

module.exports.index = function (req, res) {
  res.render('index');
}
module.exports.feedback = function (req, res) {
  let username = req.body.lg_username;
  let pass = req.body.lg_password;
  customers.findOne({ 'username': username }, (err, cust) => {
    if (err) {
      return console.error(err);
    } else {
      if (pass == cust.password) {
        let cdate = (new Date()).toLocaleDateString();
        res.render('feedback', { customer: cust, date: cdate });
      }
    }
  });
}
module.exports.thankyou = function (req, res) {
  let username = req.body.username;
  let cust = req.body;
  //delete customers._id;
  customers.findOneAndUpdate({ 'username': username }, cust, (err) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('thankyou');
    }
  });
}
module.exports.registration = function (req, res) {
  res.render('registration');
}
module.exports.register = function (req, res) {
  let cust = new customers(req.body);
  cust.save((err) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('index');
    }
  });
}
module.exports.allcustomers = function (req, res) {
  customers.find((err, custs) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('allcustomers',{
        custs: custs
      });
    }
  })
}