import React, { Component } from 'react'

class LiveAuction extends  Component {
    render() {
        return (
            <section className="left-section product-bg wow fadeInDown" data-wow-delay=".7s">
                <div className="inner">
                    <div className="col-md-12">
                        <h1>
                            <span>Sweatshirt</span><br/> of the month
                        </h1>
                        <div className="card-carousel" style={{marginTop: '30px'}}>
                            <div className="my-card">
                                <img alt="" src="assets/images/products/1.jpg" width="100" height="100"/>
                            </div>
                            <div className="my-card">
                                <img alt="" src="assets/images/products/2.jpg" width="100" height="100"/>
                            </div>
                            <div className="my-card">
                                <img alt="" src="assets/images/products/3.jpg" width="100" height="100"/>
                            </div>
                            <div className="my-card">
                                <img alt="" src="assets/images/products/4.jpg" width="100" height="100"/>
                            </div>
                            <div className="my-card">
                                <img alt="" src="assets/images/products/2.jpg" width="100" height="100"/>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <h2 style={{marginTop: '30px', marginBottom: '15px'}}>
                            <span>Long Sleeve Half Zip Mock Neck Sweatshirt</span>
                        </h2>
                        <p>
                            When there's chill in the air, this super soft knit top is just what you need
                            for casual, cool-weather style, with a zipper front for sporty appeal.
                        </p>
                        <div className="counter">
                            <ul id="countdown">
                                <li><span className="days">00</span><p className="days_text">Days</p></li>
                                <li className="seperator">:</li>
                                <li><span className="hours">00</span><p className="hours_text">Hours</p>
                                </li>
                                <li className="seperator">:</li>
                                <li><span className="minutes">00</span><p className="minutes_text">Min</p>
                                </li>
                                <li className="seperator">:</li>
                                <li><span className="seconds">00</span><p className="seconds_text">Sec</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LiveAuction