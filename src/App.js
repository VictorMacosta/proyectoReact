// import logo from './logo.svg';
import './App.css';
import losDatos from './datos.js'
import navbar from './components/navbar'


// losDatos()
console.log(losDatos.todaLaInfo)
console.log()
function App (){
  return(
    navbar()
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
