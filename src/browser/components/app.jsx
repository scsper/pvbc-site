var React = require('react'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    Header = require('./home/header.jsx'),
    Navigation = require('./navigation.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation />
                <RouteHandler />
            </div>

        );
    }
});
