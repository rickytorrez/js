const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('post request to sign up route');
});

module.exports = router;