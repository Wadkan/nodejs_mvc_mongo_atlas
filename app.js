const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');
const fs = require('fs');

// express app
const app = express();

// connect to mongoDB
const dbUriFile = fs.readFileSync('./dbUriFile.txt');
const dbURI = dbUriFile.toString();

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page - fire only if code reach this part
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
