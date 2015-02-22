var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="content-section-a">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-6">
                            <h2 className="section-heading">We meet Sundays at 10:30am.</h2>
                            <p className="lead">875 South Park Victoria Drive, <br />Milpitas, CA 95035</p>
                        </div>
                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                            <img className="img-responsive map" src="img/Church-Map.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});
