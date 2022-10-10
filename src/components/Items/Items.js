import './Items.css'
import {Link} from 'react-router-dom'
const Items =({products})=>{
    
    return(
        <ul className="ItemFlex">
            { products.map(products=>
                <Link to ={`detalle/${products.id}`} >
                    <div key={products.id} className="card">
                        <h3>
                            {products.name }
                        </h3>
                        <img src={products.img} alt="algo"/>
                        <div className="precioYStock">
                        <h4>{products.price}</h4>
                        <h4>{products.stock}</h4>
                        </div>
                    </div>
                </Link>
                
            )}
        </ul>
    )
}


export default Items