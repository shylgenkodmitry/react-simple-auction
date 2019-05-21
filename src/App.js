import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import { WOW } from "wowjs/dist/wow"
import LiveAuction from "./LiveAuction"
import OfferForm from "./OfferForm"

class App extends Component {

    componentDidMount() {
        new WOW().init();
    }

    render() {
        const logo = require('./assets/images/logo.png');

        return (
            <div className="wrapper">
                <Helmet>
                    <title>Male Jumper Auction</title>

                    <meta name="description" content="Male Jumper Auction" />
                    <meta name="keywords" content="Jumper, Male Jumper, Auction, Male Jumper Auction" />

                </Helmet>
                <a className="logo split-logo d-none d-sm-block wow fadeIn" href="/" data-wow-delay=".5s">
                    <img alt="" src={logo} />
                </a>
                <a className="logo split-logo d-block d-sm-none wow fadeIn text-center" style={{'width': '100%'}} href="/" data-wow-delay=".5s">
                    <img alt="" src={logo} />
                </a>

                <div className="main split split-2">
                    <section className="split-home">
                        <LiveAuction />
                        <OfferForm />
                    </section>
                </div>

            </div>
        )
    }
}

export default App