var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="content-section-a">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-6">
                            <hr className="section-heading-spacer" />
                            <div className="clearfix"></div>
                            <h2 className="section-heading">We meet Sundays at 10:30am.</h2>
                            <p className="lead">1063 Morse Ave. #25-304<br />Sunnyvale, CA 94089</p>
                        </div>
                        <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                            <img className="img-responsive" src="img/ipad.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});
