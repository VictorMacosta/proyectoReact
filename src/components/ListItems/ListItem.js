import './ListItem.css'
import { getProducts } from "../asyncMock"
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

// const ListDeItem = products.map(()=>{})





export default ListItem