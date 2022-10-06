import './NavBar.css'
import carrito from '../assets/shopping.png'
const Navbar = (props) => {







    
    return (
        <>
        <div className="titulo">
            <h2 className="nombre">Algun nombre</h2>
        </div>,
        <div className="navegador">
            <ul className="listPadre">
                <button>remera</button>
                <button>sweater</button>
                <button>oferta</button>
            </ul>
            <img src={carrito} alt=""/>
            3
        </div>        
        </>
    )
}

export default Navbar