const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const apiRouter = require('./api/index');

app.use('/api', apiRouter);

app.listen(8000, () => {
    console.log("Start Server (8080)");
});
