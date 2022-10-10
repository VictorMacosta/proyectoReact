// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Contar from './components/Contador/Contador';
import Navbar from './components/NavBar/Navbar'
import ListItem from './components/ListItems/ListItem'
import {DetalleProductoContenedor} from './components/ListItems/ListItem'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

console.log()
function App (){
  // const [Input, setInput] = useState('')
  return(
    <>
      <BrowserRouter>
      <main>
        <Navbar/>
        <ListItem/>
        <Routes>
          <Route path='/Contador' element={<Contar/>}/>
          <Route path='/Detalles' element={<DetalleProductoContenedor/>}/>
        </Routes>
      </main>
      </BrowserRouter>
    </>
  )
}


export default App;
