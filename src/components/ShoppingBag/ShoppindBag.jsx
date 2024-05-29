import './ShoppingBag.css'
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import React, { useEffect, useState } from 'react';
import { serv } from '../../data';
import { Link } from 'react-router-dom'

export default function ShoppingBag() {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${serv}menu/0/positions`);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [])
    
    return (
        <div className='shopping-cart'>
            <div className="title">
                Корзина
            </div>
            {Object.values(data).map(me => (
                <ShoppingCart
                    key={me.id}
                    id={me.id}
                    name={me.name}
                    description={me.description}
                    amount_in_cart={me.amount_in_cart}
                    price={me.price}
                />
            ))}
            <Link to="/">
                <button className="navigateButton">На главное меню</button>
            </Link>
        </div>
    )
}