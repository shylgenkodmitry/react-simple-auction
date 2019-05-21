import React, { Component } from 'react'

class OfferForm extends Component {
    render() {
        return (
            <section className="right-section wow fadeInDown" data-wow-delay=".8s">
                <div className="col-md-12">
                    <div className="offer-title text-center">
                        <h1>Interested in the product?</h1>
                        <p>
                            Use the contact form below to make your best offer.
                        </p>
                    </div>
                    <form id="contact-form" method="post" action="assets/php/contact.php">
                        <div className="messages"></div>
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_name">Firstname *</label>
                                        <input id="form_name" type="text" name="name"
                                               className="form-control"
                                               placeholder="Please enter your firstname *"
                                               required="required" data-error="Firstname is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_lastname">Lastname *</label>
                                        <input id="form_lastname" type="text" name="surname"
                                               className="form-control"
                                               placeholder="Please enter your lastname *"
                                               required="required" data-error="Lastname is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_email">Email *</label>
                                        <input id="form_email" type="email" name="email"
                                               className="form-control"
                                               placeholder="Please enter your email *" required="required"
                                               data-error="Valid email is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_phone">Phone</label>
                                        <input id="form_phone" type="tel" name="phone"
                                               className="form-control"
                                               placeholder="Please enter your phone" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_message">Proposal *</label>
                                        <textarea id="form_message" name="message" className="form-control"
                                                  placeholder="Please mention your price *" rows="4"
                                                  required="required"
                                                  data-error="Please,leave us a message."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <input type="submit" className="btn btn-success btn-send"
                                           value="Make Offer" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default OfferForm