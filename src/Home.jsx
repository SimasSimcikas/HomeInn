import React from 'react';
import './styles/home.css';
import sofa from './assets/sofa.png';

function Home () {

    return (

        <div className='home-section'>
            <div className='content-home'>

                <div className='box-home'>

                    <h1>Modern furniture <br />for your home</h1>

                    <p>Our modern furniture combines timeless design with exceptional craftsmanship. <br />Explore a wide range of pieces that bring both style and comfort to your home. <br />Crafted with high-quality materials and attention to detail</p>
                    
                    <button>Shop now</button>

                </div>

                <div className='img-home'>
                    <img src={sofa} alt="sofa" />
                </div>

            </div>
        </div>

    )

}

export default Home