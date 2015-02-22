var React = require('react'),
    Router = require('react-router'),
    Route = Router,
    DefaultRoute = Router.DefaultRoute,
    Home = require('./components/home/index.jsx'),
    Visit = require('./components/visit/index.jsx'),
    About = require('./components/about/index.jsx'),
    Ministries = require('./components/ministries/index.jsx'),
    Staff = require('./components/staff/index.jsx'),
    App = require('./components/app.jsx');

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Home} />
        <Route name="about" handler={About} />
        <Route name="visit" handler={Visit} />
        <Route name="ministries" handler={Ministries} />
        <Route name="staff" handler={Staff} />
    </Route>
);

module.exports = Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(Handler(null), document.getElementById('container'));
});
