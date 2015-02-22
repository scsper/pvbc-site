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
                                    <p className="text-muted service">875 South Park Victoria Drive,<br/>Milpitas, CA 95035</p>
                                </li>
                                <li className="col-sm-4">
                                    <h3>Contact Us</h3>
                                    <ul>
                                        <li className="text-muted service"> (408) 263-9000</li>
                                        <li className="text-muted service"> info@parkvictoria.org </li>
                                        <li className="text-muted service"> (fb) (twitter)</li>
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
