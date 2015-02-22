var React = require('react'),
    Router = require('react-router'),
    Route = Router,
    DefaultRoute = Router.DefaultRoute,
    Home = require('./components/home/index.jsx'),
    App = require('./components/app.jsx');

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home} />
    </Route>
);

module.exports = Router.run(routes, function(Handler) {
    React.render(Handler(null), document.getElementById('container'));
});
