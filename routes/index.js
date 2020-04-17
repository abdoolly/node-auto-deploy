var express = require('express');
var router = express.Router();
const { commandRunnerRequest } = require('../modules/commandRunner');

router.get('/test', (req, res) => res.send('change 1.0'));

router.get('/deploy', commandRunnerRequest);

router.post('/deploy', (req, res) => {

  console.log('req.body.ref', req.body.ref);
  console.log('req.headers', req.headers);
  console.log('booody', req.body);

  res.status(200).send();

  // return commandRunnerRequest(req, res);
});

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.render('index', { title: 'Express' });
});

module.exports = router;