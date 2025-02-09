import React from 'react';
import './styles/aboutus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faGem,  faLightbulb, faRecycle} from '@fortawesome/free-solid-svg-icons';
import lamp from './assets/lamp.png';

function About () {

    return (
        
        <div className='about-section'>

            <div className='about-container'>

                <div className='about-img'>
                    <img src={lamp} alt="lamp" />
                </div>

                <div className='about-box'>

                    
                    <div className='about-intro'>
                        <span>Little about us</span>
                        <p>At HomeInn, we are committed to creating sustainable and stylish furniture that blends functionality with aesthetics. <br />Our mission is to bring comfort to your home using high-quality, responsibly sourced materials and modern design solutions. <br />We prioritize sustainability, durability, and customer satisfaction.</p>
                    </div>

                    <div className='about-something'>

                        <div className='about-something-box'>
                            <div className='about-something-box-intro'>
                                <FontAwesomeIcon icon={faSeedling} style={{ color: 'green', fontSize: '34px'}}/>
                                <span>Sustainability</span>
                            </div>
                            <p>For every tree we cut down, we plant a new one to ensure our <br />production remains environmentally friendly and sustainable.</p>
                        </div>

                        <div className='about-something-box'>
                            <div className='about-something-box-intro'>
                                <FontAwesomeIcon icon={faGem} style={{color: '#a5c6cc', fontSize: '34px'}}/>
                                <span>Premium Quality</span>
                            </div>
                            <p>We use only the finest materials to craft our furniture, <br />ensuring long-lasting durability and comfort for your home.</p>
                        </div>

                        <div className='about-something-box'>
                            <div className='about-something-box-intro'>
                                <FontAwesomeIcon icon={faLightbulb} style={{color: 'rgb(255 194 80)', fontSize: '34px'}}/>
                                <span>Innovative Design</span>
                            </div>
                            <p>We constantly explore new design trends to provide modern and functional furniture that meets your lifestyle needs.</p>
                        </div>

                        <div className='about-something-box'>
                            <div className='about-something-box-intro'>
                                <FontAwesomeIcon icon={faRecycle} style={{color: '#031c11', fontSize: '34px'}}/>
                                <span>Eco-Friendly </span>
                            </div>
                            <p>Our production processes focus on minimizing waste and maximizing efficiency to contribute to environmental conservation.</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>


    )
}

export default About