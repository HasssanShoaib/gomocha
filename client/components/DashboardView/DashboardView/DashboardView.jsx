import React from 'react'
import PrevAndFavorites from '../PrevAndFavorites/PrevAndFavorites'
import { Link } from 'react-router'
import sass from '../../App/app.scss'
import sass2 from './dashboard-view.scss'

var DashboardView = React.createClass({

    propTypes: {
        username: React.PropTypes.string
    },

    render: function() {
        return (
            <div className="dashboard-container">
                <div className="title-cover">
                <h1>Hey! Just click start to begin!</h1>
                </div>

                <div className="main-wrap">
                        <Link to="/select-shop" className="start-button-wrap">
                            <button className="next-button start-button">
                                <i className="fa fa-coffee" aria-hidden="true"></i>
                                    Start
                            </button></Link>
                        { /*<PrevAndFavorites /> */}

                <div className="dashboard-divider"></div>
                <h2 className="how-it-works">Wait...how does this work?</h2>

                </div>
                <div className="landing-icon-wrap">
                    <div className="landing-icon landing-icon-1">
                        <img src="/img/landing-icon-1.png" />
                        <h2>Select a shop</h2>
                    </div>
                    <div className="landing-icon landing-icon-2">
                        <img src="/img/landing-icon-2.png" />
                        <h2>Place your order</h2>
                    </div>
                    <div className="landing-icon landing-icon-3">
                        <img src="/img/landing-icon-3.png" />
                        <h2>Ready when you arrive!</h2>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = DashboardView;
