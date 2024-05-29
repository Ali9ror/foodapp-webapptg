import Button from "../Button/Button"
import { useState } from "react"
import './NavBar.css'



export default function NavBar({category, onChange}) {
    const [contentType, setContentType] = useState('Бургеры 🍔')

    return (
          <div className="head">
            <div className="content">

            {category.map((inform) => (<Button key={inform.id} {...inform} isActive={contentType == inform.name} onClick={() => {onChange(inform.name), setContentType(inform.name)}}/>))}
          </div></div>
          
    )
}