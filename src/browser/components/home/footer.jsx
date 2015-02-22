var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="no-padding col-lg-12">
                            <ul className="clearfix">
                                <li className="col-sm-4">
                                    <h3>Sunday Gatherings</h3>
                                    <ul>
                                        <li className="text-muted service">9:00 AM Bible Study</li>
                                        <li className="text-muted service">10:30 AM Main Worship (English & Spanish)</li>
                                        <li className="text-muted service">5:30 PM College & Young Adults Service</li>
                                    </ul>
                                </li>
                                <li className="col-sm-4">
                                    <h3>Location</h3>
                                    <p className="text-muted service"><a className="text-muted" target="_blank" href="https://www.google.com/maps/place/875+S+Park+Victoria+Dr,+Milpitas,+CA+95035/@37.4231411,-121.8777034,17z/data=!3m1!4b1!4m2!3m1!1s0x808fceea72074857:0x7d0f345d69d9466e">875 South Park Victoria Drive,<br/>Milpitas, CA 95035</a></p>
                                </li>
                                <li className="col-sm-4">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li className="text-muted service"> (408) 263-9000</li>
                                        <li className="text-muted service"> info@parkvictoria.org </li>
                                        <li className="text-muted service">
                                            <a target="_blank" href="https://www.facebook.com/pvbcmilpitas"><img src="img/facebook.png" height="20" width="20"></img></a>
                                        </li>
                                    </ul>
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
