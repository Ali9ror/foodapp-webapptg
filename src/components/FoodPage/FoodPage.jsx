
import './FoodPage.css'

export default function FoodPage({id, data}) {
    return (
        <main>
            <div className="mainPage">
            <div className="cardImage">
            <img src="https://menunedeli.ru/wp-content/uploads/2022/07/41322293-5B97-451F-886E-2522AB91F67B-1200x948.jpeg" alt="Not found" />
            </div>
            <div className="infoCard">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
            
        </div>
        </main>
    )
}