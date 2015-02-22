var React = require('react'),
    Content = require('./content.jsx'),
    Footer = require('./footer.jsx'),
    Header = require('./header.jsx'),
    Home;

Home = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
});

module.exports = Home;
