import React from 'react';
import './Home.scss';
import ShoppingItem from './ShoppingItem/ShoppingItem';
import ProductsJson from '../../assets/products.json';

export default function Home() {
    const allShoppingItems = ProductsJson.products;

    return(
        <div className="Home">
            <div className="container">
                <img className="home-img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home"/>

                <div className="products-container">
                    {allShoppingItems.map((item, i) => {
                        return(
                            <ShoppingItem
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                                key={`product${i}`}
                                />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
