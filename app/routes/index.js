let express = require('express');

let router = express.Router();
//require  controller
const control = require('../controllers/index.js');


/* GET home page. */
router.get('/', (req, res) => {
  control.index(req, res)
}).post('/feedback', (req, res) => {
  let ses = req.session;
  if (req.body.lg_username != null && req.body.lg_username != '') {
    control.feedback(req, res)
  }
});

router.get('/feedback', (req, res) => {
  control.feedback(req, res)
}).post('/thankyou', (req, res) => {
  control.thankyou(req, res)
});
router.get('/thankyou', (req, res) => {
  control.thankyou(req, res)
});
router.get('/registration', (req, res) => {
  control.registration(req, res)
}).post('/registration', (req, res) => {
  control.register(req, res);
});
router.get('/allcustomers', (req,res) => {
  control.allcustomers(req,res);
});

module.exports = router;
