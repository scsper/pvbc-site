var React = require('react'),
    Header = require('./header.jsx'),
    Navigation = require('./navigation.jsx'),
    Content = require('./content.jsx'),
    Footer = require('./footer.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Navigation />
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
});
