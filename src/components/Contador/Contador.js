import './Contador.css'
import {useState} from 'react'

const Contar = () => {
    const stock = 12
    const initial = 0
    const [count, setCount]= useState(initial)
    const suma = () => {
    if(count < stock){
        setCount(count + 1)
    }
    }
    const resta = () => {
        if(count >0){
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(initial)
    }
    const alCarrito =()=>{
        if(count > 0){
            console.log('agregado al carrito')
        }
    }
    return (
        <div className="contara">
            <div className="contador">
                <h1>{count}</h1>
            </div>
            <div className="botones">
                <button onClick={suma}>suma</button>
                <button onClick={resta}>resta</button>
                <button onClick={reset}>reset</button>
                <button onClick={alCarrito}>Agregar al carrito</button>

            </div>
        </div>
    )
}

export default Contar