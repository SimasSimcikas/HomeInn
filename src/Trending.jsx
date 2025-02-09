import React, { useEffect, useState } from 'react';
import './styles/trending.css';
import axios from 'axios';

function Trending() {
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Chairs');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [trendingProducts, setTrendingProducts] = useState([]);

    
    const categoryToFolder = {
        Chairs: 'trendingChair',
        Couches: 'trendingCouch', 
        Furniture: 'trendingFurniture',
        Tables: 'trendingTable'
    };


    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        axios.get('https://homeinn-backend.onrender.com/app/items')
            .then((response) => {
                setItems(response.data);
                
                const filteredTrending = response.data.filter(item => item.Trending === 1  && item.Subcategory === selectedCategory);
                setTrendingProducts(filteredTrending);

            })
            .catch((error) => {
                console.error('Klaida gaunant duomenis: ', error);
            });
    }, [selectedCategory]);

    useEffect (() => {
        if (trendingProducts.length > 0) {
            const filtered = trendingProducts.filter(item => item.Subcategory === selectedCategory);
            setFilteredProducts(filtered)
        }
    }, [selectedCategory, trendingProducts])

    return (
        <div className='Trending-section'>
            <div className='Trending-content'>

                <div className='Trending-intro'>
                    <h1>Trending Furniture</h1>
                    <p>Stay ahead of the trends with our carefully curated selection of furniture that blends style and functionality.</p>
                </div>

                <div className='Trending-box'>
                    <div className='Trending-catalog'>
                        <ul>
                            <button onClick={() => handleCategoryChange('Chairs')}className={selectedCategory === 'Chairs' ? 'active' : ''}><li>Chairs</li></button>
                            <button onClick={() => handleCategoryChange('Furniture')}className={selectedCategory === 'Furniture' ? 'active' : ''}><li>Furniture</li></button>
                            <button onClick={() => handleCategoryChange('Tables')}className={selectedCategory === 'Tables' ? 'active' : ''}><li>Tables</li></button>
                            <button onClick={() => handleCategoryChange('Couches')}className={selectedCategory === 'Couches' ? 'active' : ''}><li>Couches</li></button>
                        </ul>

                        <div className='Trending-items'>
                            {trendingProducts.map((item) => (
                                <div key={item.ID} className='Trending-item-box'>
                                        <img src={`https://homeinn-backend.onrender.com/${categoryToFolder[item.Subcategory]}/${item.Image_URL}`} alt={item.ItemName} />
                                    <div className='Trending-items-box-intro'>
                                        <span>{item.ItemName}</span>
                                        <p>${Number(item.Price).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Trending;
