
const DetalleProducto =({product})=>{
    return(
        <div>
            {product.map(product =>
            <div>
                <h3>
                    {product.name }
                </h3>
                <img src={product.img} alt="algo"/>
                <div className="precioYStock">
                <span>{product.price}</span>
                <span>{product.stock}</span>
                </div>
            </div>
            )}
        </div>
    )
}


export default DetalleProducto