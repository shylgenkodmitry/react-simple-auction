import React, { Component } from 'react'
import Slider from "./Slider";

class LiveAuction extends  Component {
    render() {
        return (
            <section className="left-section wow fadeInDown" data-wow-delay=".7s">
                <div className="inner">
                    <div className="col-md-12">
                        <h1>
                            <span>Sweatshirt</span><br/> of the month
                        </h1>
                        <div className="slider-container">
                            <Slider />
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