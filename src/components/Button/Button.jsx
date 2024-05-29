import './Button.css'
export default function Button({name, onClick, isActive}) {
    return <button className={isActive ? 'button active' : 'button'} onClick={onClick}>{ name }</button>
}