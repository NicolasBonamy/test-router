const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).send('pets route ok!')
});

module.exports = router;
