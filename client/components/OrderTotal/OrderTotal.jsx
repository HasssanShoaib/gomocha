import React from 'react'
import OrderTotalRow from '../OrderTotalRow/OrderTotalRow'
import OrderTax from '../OrderTax/OrderTax'
import OrderTotalTotal from '../OrderTotalTotal/OrderTotalTotal'
import NextButton from '../NextButton/NextButton'
import sass from './order-total.scss'


var OrderTotal = React.createClass({
    render: function() {

        var orderItems = this.props.orderItems.map(
            (item, index) => {
                return <OrderTotalRow
                itemDetails={item}
                handleDeleteItemFromOrder={this.props.handleDeleteItemFromOrder}
                key={index}
                index={index} />
            }
        );

        // ORDER TOTAL AND TAX CALCULATION //
        var total = this.props.orderItems.reduce((sum, current) =>
            sum + current.price, 0);
        var orderTax = (total * 0.1);
        var orderTotal = (total + orderTax).toFixed(2);

        return (
            <div>
                <section id="order-total">
                    <h2>Order Total</h2>
                    <table className="order-total-table">
                        <tbody>
                            {orderItems}
                            <OrderTax orderTax={orderTax} />
                            <OrderTotalTotal
                                orderTotal={orderTotal}
                                orderItems={this.props.orderItems} />
                        </tbody>
                    </table>
                </section>
                <NextButton />
            </div>
        )
    }
});

module.exports = OrderTotal;
