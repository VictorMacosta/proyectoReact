import { useState, useEffect } from 'react'
import { getProduct } from '../asyncMock'
// import DetalleProducto from '../DetalleProducto/DetalleProducto'


const DetalleProductoContenedor=()=>{
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

export default DetalleProductoContenedor