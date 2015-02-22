var React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="ministry-node">
                <div className="ministry-img">
                	<img className="staff-img" src={this.props.imageLink} />
                </div>
                <div className="info">
                {this.props.info}
                </div>
            </div>
        );
    }
});
