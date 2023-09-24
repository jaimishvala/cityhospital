import React from 'react';
import { ContactH4, Section } from '../../components/UI/Heading/Heading';
import { Main, P, P1 } from '../../components/UI/TextArea/TextArea';

function Contact(props) {
    return (
        <Main>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="section-title">
                        <Section>Contact</Section>
                        <P>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</P>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt" />
                                    <ContactH4>Location:</ContactH4>
                                    <P1> F-505, Inovative Plazza New Delhi, India</P1>
                                </div>
                                <div className="email">
                                    <i className="bi bi-envelope" />
                                    <ContactH4>Email:</ContactH4>
                                    <P1>cityhospital@example.com</P1>
                                </div>
                                <div className="phone">
                                    <i className="bi bi-phone" />
                                    <ContactH4>Call:</ContactH4>
                                    <P1>+91 9988776655</P1>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <form action method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </Main>
    );
}

export default Contact;