var React = require('react'),
    App = require('./components/app.jsx');

window.onload = function() {
    React.render(App(null), document.getElementById('container'));
};
