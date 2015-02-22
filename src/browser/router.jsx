var React = require('react'),
    Router = require('react-router'),
    Route = Router,
    DefaultRoute = Router.DefaultRoute,
    Home = require('./components/home/index.jsx'),
    Visit = require('./components/visit/index.jsx'),
    About = require('./components/about/index.jsx'),
    Prayer = require('./components/ministries/prayer/index.jsx'),
    Arts = require('./components/ministries/arts/index.jsx'),
    Spanish = require('./components/ministries/spanish/index.jsx'),
    Community = require('./components/ministries/community/index.jsx'),
    Outreach = require('./components/ministries/outreach/index.jsx'),
    Staff = require('./components/staff/index.jsx'),
    App = require('./components/app.jsx');

var routes = (
    <Route handler={App}>
        <Route name="about" handler={About} />
        <Route name="community" handler={Community} />
        <Route name="outreach" handler={Outreach} />
        <Route name="arts" handler={Arts} />
        <Route name="spanish" handler={Spanish} />
        <Route name="prayer" handler={Prayer} />
        <Route name="staff" handler={Staff} />
        <DefaultRoute handler={Home} />
    </Route>
);

module.exports = Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(Handler(null), document.getElementById('container'));
});
