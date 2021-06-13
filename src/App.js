import React, {
  Fragment,
  useState
} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import Carrito from './components/Carrito';

function App() {

  // Listado de productos
  const [ productos, setProductos ]=useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa Angular', precio: 40 },
    { id: 3, nombre: 'Camisa VueJS', precio: 30 },
    { id: 4, nombre: 'Camisa NodeJS', precio: 20 },
  ]);

  // State carrito de compras
  const [ carrito, setCarrito ] = useState([]);


  // Obtener fecha actual
  const fecha=new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo='Tienda Virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}

      <Carrito 
        carrito={carrito}
        setCarrito={setCarrito}
      />

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
