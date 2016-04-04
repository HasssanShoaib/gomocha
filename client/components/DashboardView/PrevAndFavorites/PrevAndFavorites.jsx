import React from 'react'
import sass from './prev-and-favorites.scss'

var PrevAndFavorites = React.createClass({


    render: function() {
        return (
            <div>
                <div className="prev-orders-button"><i className="fa fa-reply fa-lg"></i> Previous Orders</div>
                <div className="fav-orders-button"><i className="fa fa-heart fa-lg"></i> Fav Orders</div>
            </div>
        )
    }
});

module.exports = PrevAndFavorites;
