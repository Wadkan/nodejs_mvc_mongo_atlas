const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://mongouser:iy!3kWCvcx4epmv@nodedemo.syaid.mongodb.net/node-demo-db?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
})



app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 page - fire only if code reach this part
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
