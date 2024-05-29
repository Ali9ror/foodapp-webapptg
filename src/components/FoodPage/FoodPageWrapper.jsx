import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { serv } from '../../data';
import './FoodPage.css';

export default function FoodPageWrapper() {
    const [data, setData] = useState({});
    const { id } = useParams();

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
    }, []);

    
    if (!data[id]) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <div className="mainPage">
                <div className="cardImage">
                    <img src={data[id-3].img_source} alt="Not found" />
                </div>
                <div className="infoCard">
                    <h2>{data[id-3].name}</h2>
                    <p>{data[id-3].description}</p>
                </div>
            </div>
        </main>
    );
}
