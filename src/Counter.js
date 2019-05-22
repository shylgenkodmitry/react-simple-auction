import React, { Component } from 'react'
import Countdown from 'react-countdown-now'

class Counter extends  Component {

    render() {
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            return (
                <div className="counter">
                    <ul id="countdown">
                        <li><span className="days">{days}</span><p className="days_text">Days</p></li>
                        <li className="seperator">:</li>
                        <li><span className="hours">{hours}</span><p className="hours_text">Hours</p>
                        </li>
                        <li className="seperator">:</li>
                        <li><span className="minutes">{minutes}</span><p className="minutes_text">Min</p>
                        </li>
                        <li className="seperator">:</li>
                        <li><span className="seconds">{seconds}</span><p className="seconds_text">Sec</p>
                        </li>
                    </ul>
                </div>
            )
        };

        return <Countdown date={Date.now() + 10 * 24 * 60 * 60 * 1000} renderer={renderer} />
    }
}

export default Counter