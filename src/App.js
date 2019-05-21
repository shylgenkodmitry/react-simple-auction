import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import LiveAuction from "./LiveAuction"
import OfferForm from "./OfferForm"

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Male Jumper Auction</title>

                    <meta name="description" content="Male Jumper Auction" />
                    <meta name="keywords" content="Jumper, Male Jumper, Auction, Male Jumper Auction" />

                </Helmet>
                <a className="logo split-logo hidden-xs wow fadeIn" href="" data-wow-delay=".5s">
                    <img alt="" src="assets/images/logo.png" width="100" height="100"/>
                </a>
                <a className="logo split-logo visible-xs-block wow fadeIn text-center" style={{'width': '100%'}} href="" data-wow-delay=".5s">
                    <img alt="" src="assets/images/logo.png" width="100" height="100"/>
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