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
                        <Link className="navbar-brand topnav" to="/">Park Victoria Baptist Church</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <a href ="">Ministries<span className="glyphicon glyphicon-chevron-down menu-dropdown"></span></a>
                                <ul className="submenu">
                                    <li><Link to="outreach">Community</Link></li>
                                    <li><Link to="staff">Outreach</Link></li>
                                    <li><Link to="staff">Prayer</Link></li>
                                    <li><Link to="staff">Arts</Link></li>
                                    <li><Link to="staff">Spanish</Link></li>
                                </ul>
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
