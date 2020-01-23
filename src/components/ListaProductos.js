import React, { Component, Fragment } from "react";
import Producto from "./Producto";

class ListaProductos extends Component {
    
    state = {
        productos: [
            { id: 1, nombre: 'Camimsa ReactJS', precio: 30 }, 
            { id: 2, nombre: 'Camimsa VueJS', precio: 30 }, 
            { id: 3, nombre: 'Camimsa Angular', precio: 30 }, 
            { id: 4, nombre: 'Camimsa nodeJS', precio: 30 }
        ],
        totalCarrito: 500,
        cliente: 'Jose Gallegos'
    }

        
    
    render() {
        const {productos} = this.state;
        console.log(productos)
        return (
            <Fragment>
                <h1>Lista de productos</h1>
                {productos.map(producto => (
                    <Producto 
                        key={producto.id}
                        producto = {producto}
                    />
                ))}
            </Fragment>
        );
    }
}


export default ListaProductos;