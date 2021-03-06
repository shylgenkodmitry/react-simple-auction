import React, { Component } from 'react'
import Slider from "./Slider";
import Counter from "./Counter";

class LiveAuction extends  Component {
    render() {
        return (
            <section className="left-section wow fadeIn" data-wow-delay=".7s">
                <div className="inner">
                    <div className="col-md-12">
                        <h1>
                            <span>Male Jumper</span><br/> of the month
                        </h1>
                        <div className="slider-container">
                            <Slider />
                        </div>
                        <h2 style={{marginTop: '-10px', marginBottom: '5px'}}>
                            <span>Long Sleeve Half Zip Mock Neck Sweatshirt</span>
                        </h2>
                        <p>
                            When there's chill in the air, this super soft knit top is just what you need
                            for casual, cool-weather style, with a zipper front for sporty appeal.
                        </p>
                        <div className="text-center">
                            <table className="table table-bordered" style={{maxWidth: '400px', margin: '0 auto', marginTop: '10px'}}>
                                <tbody>
                                <tr>
                                    <td style={{width: '50%'}}>Est. Resale Value:</td>
                                    <td style={{width: '50%'}}>$333.00</td>
                                </tr>
                                <tr>
                                    <td>Opening Bid:</td>
                                    <td>$234.00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <Counter />
                    </div>
                </div>
            </section>
        )
    }
}

export default LiveAuction