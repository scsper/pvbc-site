var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                <div className="container topnav">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand topnav" href="#">Park Victoria Baptist Church</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="visit">Visit</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="ministries">Ministries</Link>
                            </li>
                            <li>
                                <Link to="staff">Staff</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
