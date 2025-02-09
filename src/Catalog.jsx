import React, { useEffect, useState } from 'react';
import './styles/catalog.css';
import axios from 'axios';

function Catalog () {
    const [items, setItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [catalogProducts, setCatalogProducts] = useState([]);

    const categoryToFolder = {
        Chairs: 'trendingChair',
        Couches: 'trendingCouch',
        Furniture: 'trendingFurniture',
        Tables: 'trendingTable'
    }

    const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
        setFilteredProducts(catalogProducts);
    } else {
        const filtered = catalogProducts.filter(item => item.Subcategory === category);
        console.log(`🔍 Atrinkti produktai kategorijai "${category}":`, filtered);
        setFilteredProducts(filtered);
    }
};


useEffect(() => {
    axios.get('http://localhost:5000/app/items')
        .then((response) => {
            console.log("📌 VISI GAUTI PRODUKTAI IŠ SERVERIO:", response.data);

            setItems(response.data);

            const catalogItems = response.data.filter(item => item.Category === "Catalog");
            setCatalogProducts(catalogItems);
            setFilteredProducts(catalogItems);
        })
        .catch((error) => {
            console.error("Klaida gaunant duomenis iš serverio:", error);
        });
}, []);

    return (

        <div className="Catalog-section">

            <div className="Catalog-content">

                <div className="Catalog-intro">
                    <h1>Catalog</h1>
                    <p>Stay ahead of the trends with our carefully curated selection of furniture that blends style and functionality.</p>
                </div>

                <div className="Catalog-box">

                    <div className="Catalog-container">

                        <div className="Catalog-navbar">
                            <ul>
                                <button onClick={() => handleCategoryChange('All')} className={selectedCategory === 'All' ? 'active' : ''}><li>All</li></button>
                                <button onClick={() => handleCategoryChange('Chairs')} className={selectedCategory === 'Chairs' ? 'active' : ''}><li>Chairs</li></button>
                                <button onClick={() => handleCategoryChange('Furniture')} className={selectedCategory === 'Furniture' ? 'active' : ''}><li>Furnitute</li></button>
                                <button onClick={() => handleCategoryChange('Tables')} className={selectedCategory === 'Tables' ? 'active' : ''}><li>Tables</li></button>
                                <button onClick={() => handleCategoryChange('Couches')} className={selectedCategory === 'Couches' ? 'active' : ''}><li>Couches</li></button>
                            </ul>
                        </div>

                        <div className='Catalog-items'>
                            {filteredProducts.map((item) => (
                                <div key={item.ID} className='Catalog-item-box'>
                                    <img src={`http://localhost:5000/${categoryToFolder[item.Subcategory]}/${item.Image_URL}`} alt={item.ItemName} />
                                    <div className='Catalog-items-box-intro'>
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
    )

}

export default Catalog