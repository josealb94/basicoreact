import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>Desde carrito</h2>

        {carrito.length === 0
        ? <p>No hay elmentos en el carrito</p>
        : carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
                esCarrito={true}
            />
        ))


        }
    </div>
);

export default Carrito;