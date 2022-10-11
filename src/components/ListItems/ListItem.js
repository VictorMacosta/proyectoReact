import './ListItem.css'
import { getProducts } from "../asyncMock"
import { getProduct } from '../asyncMock'
import { useState, useEffect } from "react"
import Items from "../Items/Items"
import { useParams } from 'react-router-dom'


const ListItem =(saludo)=>{
    const [products, setproducts] = useState([])


    useEffect(()=>{
        getProducts()
            .then(res=>{
                // console.log(res)
                setproducts(res)
            })
    },[])

    return(
        <div className="ListItemColum">
            <h1>{saludo = 'Los mas vendidos'}</h1>
            <Items products = {products}/>
        </div>
    )

}


export const DetalleProductoContenedor=()=>{
    const param = useParams()
    console.log(param)

    const [product, setproduct] = useState({})
    const {loading, setloading} = useState (true)

    
    useEffect(()=>{
        getProduct('2')
            .then(res=>{
                setproduct(res)
            }).finally(()=>{
                setloading(false)
            })
        },[])
        console.log(product)
        
        if(loading){
            return <h3>Cargando...</h3>
        }

    return(
        <div>
            <h1>Detalle de producto</h1>
            {product.id}
        </div>
    )
}



export default ListItem