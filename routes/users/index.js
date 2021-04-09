const router = require('express').Router();

router.get('/', async (req, res)=> {
    try {
        res.status(200).send(`wesh nickel !!!`)
    } catch {
        res.status(200).send(`OOPS`)
    }
})

router.get('/unique', async (req, res) =>  {
  try {
    res.status(200).send('Only one can survive !')
  }  catch {
    res.status(200).send(`OOPS`)
}
})

module.exports = router;