const router = require('express').Router();
const users = require('../../model/modelUsers');

router.get('/', users.coucou);

router.get('/unique', users.unique);

module.exports = router;