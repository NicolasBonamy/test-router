const router = require('express').Router();
const userRoute = require('../routes/users/index');
const petRoute = require('../routes/pets/index');

router.use('/users', userRoute);
router.use('/pets', petRoute);

module.exports = router;
