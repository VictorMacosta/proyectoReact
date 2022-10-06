// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Contar from './components/Contador/Contador';
import Navbar from './components/NavBar/Navbar'
import ListItem from './components/ListItems/ListItem'
import DetalleProductoContenedor from './components/DetalleProductoContenedor/DetalleProductoContenedor'

console.log()
function App (){
  const [Input, setInput] = useState('')
  return(
    <>
    <Navbar/>
    
    <main className='appMain'>
      <Contar/>
      <input value={Input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button>Buscar</button>
      <div className='appDisplay'>
          <ListItem  />
          <DetalleProductoContenedor/>
      </div>
    </main>
    </>
  )
}



export default App;
