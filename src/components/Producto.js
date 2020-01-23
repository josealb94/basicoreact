import React from "react";

const Producto = ({producto, carrito, agregarProducto, esCarrito}) => {

    const { nombre, precio, id } = producto;

    //  Agregar producto al carrito
    const seleccionarProducto = ({nombre, precio, id}) => {
        agregarProducto([
            ...carrito,
             producto
        ]);
    }

    // Eliminar producto del carrito
    const eliminarProducto = ({id}) => {
        const productos = carrito.filter(producto => producto.id !== id);

        // Colocar productos en el state 
        agregarProducto(productos);

    }

    return(
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            { esCarrito
            ?
                (
                    <button 
                        type="button"
                        onClick={() => eliminarProducto(producto) }
                    >Eliminar</button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick={() => seleccionarProducto(producto) }
                    >Comprar</button>
                )
            }
        </div>
    );
}

export default Producto;