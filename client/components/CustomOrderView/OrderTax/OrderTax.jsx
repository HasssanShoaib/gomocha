import React from 'react'

var OrderTax = React.createClass({
    render: function() {
        return (
                <tr>
                    <td>Tax</td>
                    <td>${this.props.orderTax.toFixed(2)}</td>
                </tr>
        )
    }
});

module.exports = OrderTax