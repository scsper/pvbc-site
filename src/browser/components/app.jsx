var React = require('react'),
    Router = require('react-router'),
    Header = require('./home/header.jsx'),
    Navigation = require('./navigation.jsx'),
    RouteHandler = Router.RouteHandler,

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
