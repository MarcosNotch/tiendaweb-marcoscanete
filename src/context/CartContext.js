import { useState, createContext } from 'react';

export const Context = createContext()

export const CartContext = ({children}) => {

    let [carrito, setCarrito] = useState([])

    function agregarAlCarrito(producto){
        let productoEncontrado = isInCart(producto)
        if(productoEncontrado){
            let carritoMod = carrito.map(prod => {
                if(prod.id === producto.id){
                    const cambiado = {
                        ...prod, quantityToAdd: producto.quantityToAdd
                    }
                    return cambiado
                }else{
                    return prod
                }
            })
            setCarrito(carritoMod)
        }else{
            setCarrito([...carrito, producto])
        }
    }


    function cantidadCarrito(){
        let cantidad = 0;
        carrito.forEach(
            e => cantidad += e.quantityToAdd
        )
        return cantidad
    }

    function clear(){
        setCarrito([])
    }

    function removeItem(itemId){
        setCarrito(carrito.filter(e => e.id !== itemId))
    }



    function isInCart(producto){
        let resultado =carrito.some(e => e.id === producto.id)
       return resultado
    }

    return (
        
        <Context.Provider value={{carrito, agregarAlCarrito, cantidadCarrito}}>
            {children}
        </Context.Provider>
    )


}