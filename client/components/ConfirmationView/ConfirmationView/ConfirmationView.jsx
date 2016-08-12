import React from 'react'
import OrderReadyTime from '../OrderReadyTime/OrderReadyTime'
import ShopDetails from '../ShopDetails/ShopDetails'
import DirectionsAndCall from '../DirectionsAndCall/DirectionsAndCall'
import { Link } from 'react-router'
import sass from './confirmation-view.scss'
import sass2 from '../../App/app.scss'

var ConfirmationView = React.createClass({

    propTypes: {
        methodOfTrans: React.PropTypes.string,
        duration: React.PropTypes.string,
        selectedShop: React.PropTypes.object,
        distance: React.PropTypes.string,
        userLocation: React.PropTypes.shape({
            lat: React.PropTypes.number,
            lng: React.PropTypes.number
        }),
        selectedShopLocation: React.PropTypes.shape({
            lat: React.PropTypes.number,
            lng: React.PropTypes.number
        })
    },

    render: function() {
        return (
            <div>
            <div className="title-cover">
                <h1>Order Confirmation</h1>
                <div className="userProgress">
                    <div id="fiveOfFive">
                    </div>
                </div>
            </div>

            <div className="main-wrap">
            <div className="confirmation-view-container">
                <OrderReadyTime
                methodOfTrans={this.props.methodOfTrans}
                duration={this.props.duration} />
                <ShopDetails
                selectedShop={this.props.selectedShop}
                distance={this.props.distance} />
                <DirectionsAndCall
                selectedShop={this.props.selectedShop}
                userLocation={this.props.userLocation}
                selectedShopLocation={this.props.selectedShopLocation} />
            </div>
                <Link to="/" className="back-to-dashboard"><button className="next-button">Go to Dashboard</button></Link>
            </div>
        </div>
        )
    }
});

module.exports = ConfirmationView;
