// Entities (Models)
require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

// bodyParser
    // json()
app.use(bodyParser.json());
// routes
    // auth
app.use(authRoutes);

// mongo connection
    // mongoURI settings
const mongoURI = 'mongodb+srv://admin:admin@cluster0-iol0v.mongodb.net/test?retryWrites=true&w=majority'

// mongo connection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
    // connection check
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
    // connection error handling
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});


app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${ req.user.email }`);
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});