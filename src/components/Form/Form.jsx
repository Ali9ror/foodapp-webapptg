import Card from "../Card/Card"
import './Form.css'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
// const tg = window.Telegram.WebApp;

export default function Form({title, data, category, setDataSet, chosenProducts, cartContent}) {
    const categoryContent = data.filter(e => e.category == title)
    const [cartProducts, setCartProducts] = useState(cartContent)
    console.log(chosenProducts)
    console.log(cartProducts)
    
    return (

        <div className="mainForm">
            <div className='cards'>{categoryContent.map((me) => (<Card key={me.id} {...me} onToggle={setCartProducts} cartProducts={cartProducts} setDataSet={setDataSet} data={data}/>))}</div>
            <Link to="/shopping_bag">
                <button className="navigateButton">Корзина</button>
            </Link>
        </div>
        
    )

}