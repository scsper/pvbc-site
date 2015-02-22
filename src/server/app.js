var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, '../../public')));

app.set('views', 'src/server/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index');
});

/**
 * tightly coupled to client-side routes... may want to find a way to share them, somehow
 */
app.get('/staff', function(req, res) {
    res.render('index');
});

app.get('/about', function(req, res) {
    res.render('index');
});

app.get('/arts', function(req, res) {
    res.render('index');
});

app.get('/spanish', function(req, res) {
    res.render('index');
});

app.get('/community', function(req, res) {
    res.render('index');
});

app.get('/outreach', function(req, res) {
    res.render('index');
});

app.get('/prayer', function(req, res) {
    res.render('index');
});

module.exports = app;
