import './NavBar.css'
import carrito from '../assets/shopping.png'
import { Link } from 'react-router-dom'

const Navbar = (props) => {


    return (
        <>
        <div className="titulo">
            <Link to='/'>
                <h2 className="nombre">Algun nombre</h2>
            </Link>
        </div>,
        <div className="navegador">
            <ul className="listPadre">
                <Link to='/remera'>
                    <button className='btnNavbar'>remera</button>
                </Link>
                <Link to='/Sweater'>
                    <button className='btnNavbar'>Sweater</button>
                </Link>
                <Link to='/Oferta'>
                    <button className='btnNavbar'>Oferta</button>
                </Link>
            </ul>
            <img src={carrito} alt=""/>
            3
        </div>        
        </>
    )
}

export default Navbar