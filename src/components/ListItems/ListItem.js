import './ListItem.css'
import { getProducts } from "../asyncMock"
import { getProduct } from '../asyncMock'
import { useState, useEffect } from "react"
import Items from "../Items/Items"

// const busquedaManual =()=>{
// }

const ListItem =(saludo)=>{
    const [products, setproducts] = useState([])


    useEffect(()=>{
        getProducts()
            .then(res=>{
                console.log(res)
                setproducts(res)
            })
    },[])

    // console.log(products)


    return(
        <div className="ListItemColum">
            <h1>{saludo = 'Los mas vendidos'}</h1>
            <Items products = {products}/>
        </div>
    )

}

// import DetalleProducto from '../DetalleProducto/DetalleProducto'


export const DetalleProductoContenedor=()=>{
    const [product, setproduct] = useState({})
    useEffect(()=>{
        getProduct('2')
            .then(res=>{
                console.log(res)
                setproduct(res.id)
            })
    },[])
    console.log(product)
    return(
        <div>
            {/* <DetalleProducto/> */}
        </div>
    )
}

// const ListDeItem = products.map(()=>{})





export default ListItem