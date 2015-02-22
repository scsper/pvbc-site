var React = require('react'),
    StaffItem = require('./item.jsx'),
    StaffPage;

StaffPage = React.createClass({
    render: function() {
        return (
            <div className="container content">
                <ul>
                    <StaffItem name="Steve Zahare" imageLink="img/staff/steve_zahare.jpg" />
                    <StaffItem name="Michael Denton" imageLink="img/staff/michael_denton.jpg" />
                    <StaffItem name="David Roberts" imageLink="img/staff/david_roberts.jpg" />

                </ul>
            </div>
        );
    }
});

module.exports = StaffPage;
