var express = require('express');
var router = express.Router();
const { commandRunnerRequest } = require('../modules/commandRunner');

router.get('/deploy', commandRunnerRequest);

router.get('/test', (req, res) => res.send('hello world'));

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.render('index', { title: 'Express' });
});

module.exports = router;