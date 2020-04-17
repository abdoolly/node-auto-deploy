var express = require('express');
var router = express.Router();
const { commandRunnerRequest } = require('../modules/commandRunner');
const { createHmac, timingSafeEqual } = require('crypto');

router.get('/test', (req, res) => res.send('change 1.0'));

router.get('/deploy', commandRunnerRequest);

router.post('/deploy', (req, res) => {
  if (!isSecureSignature(req.body, req.headers['x-hub-signature'])) {
    return res.status(400).send();
  }

  return commandRunnerRequest(req, res);
});


const isSecureSignature = (payloadBody, signature) => {
  const secret = 'super-remote-teacher-app-hook';
  let genSign = createHmac('sha1', secret)
    .update(JSON.stringify(payloadBody))
    .digest('hex');

  genSign = `sha1=${genSign}`;

  console.log('genSign', genSign);
  console.log('signature', signature);

  return timingSafeEqual(
    Buffer.from(genSign, 'hex'),
    Buffer.from(signature, 'hex')
  );
};

/* GET home page. */
router.get('/', function (req, res, next) {
  return res.render('index', { title: 'Express' });
});

module.exports = router;