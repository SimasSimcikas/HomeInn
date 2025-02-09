import React from 'react';
import './styles/materials.css';
import wood from './assets/wood.png'
import metal from './assets/metal.png'
import fabric from './assets/fabric.png'


function Materials (){
    return (
        
        <div className='materials-section'>
            <div className='materials-content'>
                
                <div className='materials-box'>
                    <h1>Crafted with <br />excelent materials.</h1>
                    <p>Experience the perfect blend of sophistication and strength with our <br />expertly crafted furniture. We carefully select high-grade materials to create <br />pieces that not only look stunning but also withstand everyday use with <br />ease.</p>
                </div>

                <div className='materials-img'>
                    <img src={wood} alt="material-wood" />
                    <img src={metal} alt="material-fabric" />
                    <img src={fabric} alt="material-metal" />
                </div>

            </div>
        </div>

    )
}

export default Materials