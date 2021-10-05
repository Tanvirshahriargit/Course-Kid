import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <h1 className="bg-dark p-5 text-light my-4">Contact Us</h1>
            <div className="d-flex p-2 m-2">
                <div className="m-2">
                    <h5 className="text-primary text-start">Contact Us</h5>
                    <h1>Stay in touch with us</h1>
                    <div className="d-flex mt-4">
                        <div><p><FontAwesomeIcon className="text-primary fs-4" icon={faLocationArrow} /></p></div>
                        <div className="ms-3">
                            <h6>
                                222 W 37th St, New York
                                <br />
                                NY 10065, United States</h6>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div><p><FontAwesomeIcon className="text-primary fs-4" icon={faPhoneAlt} /></p></div>
                        <div className="ms-3">
                            <h6> +1245789134 </h6>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div><p><FontAwesomeIcon className="text-primary fs-3" icon={faEnvelope} /></p></div>
                        <div className="ms-3">
                            <h6> contac@coursekid.com </h6>
                        </div>
                    </div>

                </div>
                <div className="ms-5">
                    {/* google Map Link */}
                    <div className="mapouter ms-5"><div className="gmap_canvas"> <iframe width="600" height="500" src={"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href={"https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"}> </a></div></div>
                </div>
            </div>
            <div>
                <form>
                    <div>
                        <input type="text" id="input-name" placeholder="Name" />
                        <input type="email" id="input-email" placeholder="Email address" />
                        <input type="text" id="input-subject" placeholder="Subject" />
                    </div>
                    <div class="half right cf">
                        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                    </div>
                    <input className="bg-primary" type="submit" value="Submit" id="input-submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;