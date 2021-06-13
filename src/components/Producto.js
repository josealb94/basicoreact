import React from 'react';

const Producto = ({ producto, productos, carrito, setCarrito }) => {

    const { id, nombre, precio } = producto;

    // Agregar producto al carrito
    const seleccionarProducto = id => {
        const productoSeleccionado = productos.filter(producto => producto.id === id);
        setCarrito([
            ...carrito,
            ...productoSeleccionado
        ]);
    }

    // Eliminar producto del carrito
    const eliminarProducto = id => {
        const productosSeleccionados = carrito.filter(producto => producto.id !== id);
        setCarrito(productosSeleccionados);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
            ? 
                (<button
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                >Comprar</button>)
            :
                (<button
                    type="button"
                    onClick={ () => eliminarProducto(id) }
                >Eliminar</button>)
            }
        </div>
    )
}

export default Producto;