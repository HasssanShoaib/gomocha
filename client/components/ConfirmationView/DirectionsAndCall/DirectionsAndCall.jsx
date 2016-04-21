import React from 'react'
import sass from './directions-and-call.scss'

var DirectionsAndCall = React.createClass({
    render: function() {

        var callPhone = "tel: " + this.props.selectedShop.formatted_phone_number;

        // Example Google Maps Directions URL
        // 'http://maps.google.com/?saddr=34.1514058,-118.8042592&daddr=34.1482435,-118.7961565'

        var userLocation = this.props.userLocation;
        var selectedShopAddress = this.props.selectedShop.formatted_address.split(' ').join('+');

        var directions = 'http://maps.google.com/?saddr=' + userLocation.lat + ',' + userLocation.lng + '&daddr=' + selectedShopAddress;


        return (
            <div className="confirmation-button-wrap">
                <a href={directions} target="_blank"><button className="next-button confirmation-button">Directions</button></a>
                <a href={callPhone}><button className="next-button confirmation-button">Call Shop</button></a>
            </div>
        )
    }
});

module.exports = DirectionsAndCall;
