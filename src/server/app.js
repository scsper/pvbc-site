var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname, '../../public')));

app.set('views', 'src/server/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index');
});

module.exports = app;
