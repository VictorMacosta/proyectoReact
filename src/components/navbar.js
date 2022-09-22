import carrito from './img/shopping.png' 
const navbar = (props) => {
    return (
        <>
        <div className="titulo">
            <h2 className="nombre">Algun nombre</h2>
        </div>,
        <div className="navegador">
            <ul className="listPadre">
                <li>remera</li>
                <li>sweater</li>
                <li>oferta</li>
            </ul>
            <picture>
            <img src={carrito} alt="" />
            </picture>
        </div>        
        </>
        
    )
}

export default navbar