// require
//module. exports points to different func 
module.exports.index = function (req, res) {
  res.render('index');
}
module.exports.feedback = function (req, res) {
  let usern = req.session.login;
  let cdate = (new Date()).toLocaleDateString();
  res.render('feedback', { user: usern, date: cdate });
}
module.exports.thankyou = function (req, res) {
  res.render('thankyou');
}