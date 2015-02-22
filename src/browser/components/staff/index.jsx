var React = require('react'),
    StaffItem = require('./item.jsx'),
    StaffPage;

StaffPage = React.createClass({
    render: function() {
        return (
            <div className="container content">
                <ul>
                    <StaffItem name="Steve Zahare" title="Senior Pastor" imageLink="img/staff/steve_zahare.jpg" />
                    <StaffItem name="Michael Denton" title="Family Pastor" imageLink="img/staff/michael_denton.jpg" />
                    <StaffItem name="David Roberts" title="Music Pastor" imageLink="img/staff/david_roberts.jpg" />
                </ul>
            </div>
        );
    }
});

module.exports = StaffPage;
