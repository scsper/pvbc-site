var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="content-section-a">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-6">
                            <h2 className="new-to-park-victoria">New to Park Victoria?</h2>
                            <p>All are welcome to attend our Sunday services, which are designed to reflect biblical principles such as prayer, lifting up our voices to God in song, preaching and teaching the Bible, and celebrating communion. We hope you’ll join us!</p>
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
