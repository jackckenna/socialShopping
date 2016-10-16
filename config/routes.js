var express = require('express');
var router = express.Router();

var oiController = require('../controllers/sockets');
var indexController = require('../controllers/generals')

router.route('/')
      .get(indexController.index);

router.route('/chat')
      .get(oiController.show);


module.exports = router;
