import React from 'react'

var Quantity = React.createClass({
    render: function() {
        return (
            <select name="quantity" className="quantity-select" onChange={
                    (e) => {
                        console.log('quantity changed');
                        this.props.handleAddToOrderButton()
                        this.props.handleChange(e)
                    }}>
                <option value="" disabled selected>Qty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        )
    }
});

module.exports = Quantity;
