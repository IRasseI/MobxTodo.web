const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is /api/member");
});

router.post('/login', ({body: {id, password}}, res) => {
    if (id !== "cube" || password !== "1234") {
        res.status(400).send("Invalid Account Information");
        return;
    }

    res.send(true);
});

module.exports = router;
