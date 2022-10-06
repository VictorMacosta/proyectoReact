import './Items.css'
const Items =({products})=>{
    return(
        <ul className="ItemFlex">
            { products.map(products=>
            <div key={products.id} className="card">
                <h3>
                    {products.name }
                </h3>
                <img src={products.img} alt="algo"/>
                <div className="precioYStock">
                <span>{products.price}</span>
                <span>{products.stock}</span>
                </div>
            </div>) }
        </ul>
    )
}


export default Items