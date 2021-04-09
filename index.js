const express = require('express');
const app = express();
const router = require('./router/index')

app.listen(8080, () => {
    console.log("j'écoute")
});

app.use(router);

module.exports = app;
