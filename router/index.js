const router = require('express').Router();
const userRoute = require('../routes/users/index');

router.use('/users', userRoute);

module.exports = router;
