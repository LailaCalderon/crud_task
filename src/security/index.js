var express = require('express');
var router = express.Router();

var TokenAPI = require('./token.api');

router.get('/token/generate', TokenAPI.generate);

module.exports = router;