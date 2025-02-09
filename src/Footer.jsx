import React from "react";
import './styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram, faTiktok, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer () {
    return (
        <div className="footer-section">

            <div className="footer-container">

               <div className="footer-box">
                    <div className="footer-column">
                        <h3>Who we are</h3>
                        <p><b>HomeInn</b>, we offer stylish, high-quality furniture that blends comfort and design.</p>
                        <p>Our curated collection helps you create a home that feels just right.</p>
                    </div>

                    <div className="footer-column">
                        <h3>Contacts</h3>
                        <div className="social-item">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <p>HomeInn.info@gmail.com</p>
                        </div>
                        <div className="social-item">
                            <FontAwesomeIcon icon={faPhone}/>
                            <p>+37051010100</p>    
                        </div>       
                    </div>

                    <div className="footer-column">
                        <h3>Follow us</h3>
                        <div className="social-item">
                            <FontAwesomeIcon icon={faFacebook}/>
                            <p>Facebook</p>
                        </div>
                        <div className="social-item">
                            <FontAwesomeIcon icon={faInstagram}/>
                            <p>Instagram</p>
                        </div>
                        <div className="social-item">
                            <FontAwesomeIcon icon={faTiktok}/>
                            <p>Tiktok</p>
                        </div>
                        <div className="social-item">
                            <FontAwesomeIcon icon={faTwitter}/>
                            <p>Twitter</p>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3>Help</h3>
                        <p>FAQ</p>
                        <p>Delivery Information</p>
                        <p>Returns Policy</p>
                        <p>Orders</p>
                        <p>Make a return</p>
                    </div>
               </div>

                <div className="footer-rights">
                    <div className="footer-start">
                        <p>Content copyright &copy; 2025 HomeInn.com</p>
                    </div>
                    <div className="footer-end">
                        <p>Privacy policy</p>
                        <p>Terms of Use</p>
                        <p>Cookie policy</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer