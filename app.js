const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>home</p>')
    // res.sendFile('./views/index.html', { root: __dirname });
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' });
})

// 404 page - fire only if code reach this part
app.use((req, res) => {
    res.status(404).render('404');
});
