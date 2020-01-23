import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import ListaProductos from "./components/ListaProductos";
import Producto from './components/Producto';
import Carrito from './components/Carrito';


function App() {

  // Crear lista de  productos
  const [ productos, setProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 }, 
    { id: 2, nombre: 'Camisa VueJS', precio: 40 }, 
    { id: 3, nombre: 'Camisa Node.JS', precio: 30 }, 
    { id: 4, nombre: 'Camisa Angular', precio: 20 }, 
  ]);

  const [carrito, agregarProducto] = useState([])

  // Obtener año actual
  //<ListaProductos />
  const fecha = new Date().getFullYear();

  return(
    <Fragment>
      <Header
          titulo = 'Tienda Virtual'
          pendiente = 'Seccion 4 Cap 9'
      />
      
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          agregarProducto={agregarProducto}
          esCarrito={false}
        />
      ))}

      <h1>Carrito</h1>
      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );

}

export default App;
