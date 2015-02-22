var React = require('react'),
    MinistryItem = require('.././ministry-item.jsx'),
    Outreach;

Outreach = React.createClass({
    render: function() {
        return (
            <div className="content container">Outreach
             <ul>
                    <li><MinistryItem name="Steve Zahare" info="Senior Pastor" imageLink="img/staff/steve_zahare.jpg" /></li>
                    <li><MinistryItem name="Michael Denton" info="Family Pastor" imageLink="img/staff/michael_denton.jpg" /></li>
                    <li><MinistryItem name="David Roberts" info="Music Pastor" imageLink="img/staff/david_roberts.jpg" /></li>
            </ul>
            </div>
        );
    }
});

module.exports = Outreach;
