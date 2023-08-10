import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes 
import Home from "./pages/Home/"
import Footer from "./components/Footer";
import Header from "./components/Header";

//estilizacao global
import "./index.css"
// import ListaServicos from './pages/ListaServicos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home/>
    
    {/* <ListaServicos /> */}
  </React.StrictMode>,
)
