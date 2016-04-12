import React from 'react'
import sass from './shop-list-item.scss'
import { Link } from 'react-router'

var ShopListItem = React.createClass({

    propTypes: {
        shop: React.PropTypes.object.isRequired
    },

    render: function() {

        // var imageUrl = this.props.shop.photos.length ?
        //     this.props.shop.photos[0].getUrl({'maxWidth': 300, 'maxHeight': 300})
        // :   ''

        // style={{
        //        background: 'url(' + imageUrl + ')' + 'no-repeat center center',
        //        backgroundSize: 'cover'
        //    }}

        return (
            <div>
                <Link to="/custom-order">
                <div className="shop-list-item-container"
                onClick={() => this.props.handleSelectedShop(this.props.shop)} >
                    <div className="shop-list-item-details">
                    <h2>{this.props.shop.name}</h2>
                    <p>{this.props.shop.vicinity}</p>
                </div>
                <p className="shop-list-distance">2.3 mi.</p>
                </div>
                </Link>
            </div>
        )
    }
});


module.exports = ShopListItem;
