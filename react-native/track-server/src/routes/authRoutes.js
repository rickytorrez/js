const express = require('express');

const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('post request to sign up route');
});

module.exports = router;