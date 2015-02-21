var React = require('react'),
    Header = require('./header.jsx'),
    Navigation = require('./navigation.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation />
                <Header />
            </div>
        );
    }
});
