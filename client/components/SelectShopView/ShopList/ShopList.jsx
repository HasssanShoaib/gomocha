import React from 'react'
import sass from './shop-list.scss'
import ShopListItem from '../ShopListItem/ShopListItem'
import ClickForMore from '../ClickForMore/ClickForMore'
import _ from 'lodash'

var ShopList = React.createClass({


    render: function() {

        var sortedShops = _.sortBy(this.props.shops, 'shopDistance');

        var shops = sortedShops.map(
            (shop) => {
                return <ShopListItem
                            shop={shop}
                            handleSelectedShop={this.props.handleSelectedShop}
                            key={shop.place_id} />
        });

        return (
            <div>
                {shops}
                {/*<ClickForMore />*/}
            </div>
        )
    }
});

module.exports = ShopList;
