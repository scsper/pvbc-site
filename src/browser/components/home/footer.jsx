var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="list-inline">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li className="footer-menu-divider">&sdot;</li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li className="footer-menu-divider">&sdot;</li>
                                <li>
                                    <a href="#services">Services</a>
                                </li>
                                <li className="footer-menu-divider">&sdot;</li>
                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                            <p className="copyright text-muted small">Copyright &copy; Park Victoria Baptist Church 2015. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});