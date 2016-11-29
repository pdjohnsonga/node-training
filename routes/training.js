var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

router.get('/status', function(req, res, next) {
  res.send({message:"Status Update"});
});

module.exports = router;
