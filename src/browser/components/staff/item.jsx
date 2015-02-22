var React = require('react'),
    StaffPage;

StaffPage = React.createClass({
    render: function() {

        return (
            <li className="staff-list-item">
                <img className="staff-img" src={this.props.imageLink} />
                <div className="staff-text">
                    <h2 className="staff-name">{this.props.name}</h2>
                    <h4 className="staff-title">{this.props.title}</h4>
                    <p className="staff-bio">
                        Cupcake ipsum dolor sit amet gingerbread. Chupa chups lollipop lollipop pastry. Candy biscuit powder. Chupa chups chocolate chupa chups. Ice cream danish bonbon oat cake cake jelly pudding topping bonbon. Lollipop soufflé cupcake pastry.
                        Ice cream cupcake icing tootsie roll. Danish gingerbread tootsie roll toffee gingerbread cheesecake sesame snaps lemon drops. Marzipan cookie sweet cotton candy donut sweet cotton candy. Cake cheesecake marzipan tart powder gummi bears. Sugar plum soufflé wafer oat cake pie. Topping jelly beans topping fruitcake marshmallow pie wafer.
                        Biscuit powder fruitcake cotton candy chupa chups carrot cake sweet jelly sweet roll. Candy topping danish donut toffee tart soufflé brownie. Donut soufflé bonbon macaroon. Icing cake liquorice brownie pie powder pastry. Danish gummies caramels cheesecake lollipop powder cake. Gummies chupa chups marzipan liquorice ice cream tootsie roll. Marzipan gummies danish tootsie roll toffee oat cake biscuit bonbon cake. Lemon drops lemon drops chocolate cake cheesecake cake. Sugar plum lollipop bear claw gingerbread cupcake dessert.</p>
                </div>
            </li>
        );
    }
});

module.exports = StaffPage;


