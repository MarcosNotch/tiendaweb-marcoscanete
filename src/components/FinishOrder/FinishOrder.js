import './FinishOrder.css'
import { useContext, useRef, useEffect, useInsertionEffect, useState } from 'react'
import { Context } from '../../context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase/index'
import PopUp from '../PopUp/PopUp'

const FinishOrder = () => {

    const [abrirPopup, setAbrirPopup] = useState(false)
    const [completado, setCompletado] = useState(false)
    const [ordenId, setOrdenId] = useState('')
    const [correoMalIngresado, setCorreoMalIngresado] = useState(false)


    const apellido = useRef(null);
    const nombre = useRef(null)
    const telefono = useRef(null)
    const email = useRef(null)
    const emailConfirmation = useRef(null)
    const direccion = useRef(null)


    const {carrito, getMontoTotal, clear} = useContext(Context)

    function validateOrder(){

        if (email.current.value === emailConfirmation.current.value){
            setCorreoMalIngresado(false)
            createOrder();
        }else{
            setCorreoMalIngresado(true)
        }

    }


    const createOrder = async () => {





        try {
            console.log(nombre.current.value)
            const montoFinal = getMontoTotal();
            const objOrder = {
                buyer: {
                    firstName: nombre.current.value,
                    lastName: apellido.current.value,
                    phone: telefono.current.value,
                    email: email.current.value,
                    address: direccion.current.value
                },
                items: carrito,
                montoFinal,
                date: Timestamp.fromDate(new Date())
            }

            const ids = carrito.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            
            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = carrito.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.quantityToAdd

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log('respuesta de la orden generada')
                setOrdenId(orderAdded.id)
                batch.commit()
                clear()
                setCompletado(true);
            } else {
                console.log(outOfStock)
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('se termino la ejecucion de la funcion createOrder')
            setAbrirPopup(true)
        }

    }

    return (

        <div className='finish-order-container'>
            <h3>Nombre</h3>
            <input ref={nombre}></input>
            <h3 >Apellido</h3>
            <input ref={apellido}></input>
            <h3>Direccion</h3>
            <input ref={direccion}></input>
            <h3>Telefono</h3>
            <input ref={telefono}></input>
            {correoMalIngresado && <div class="alert alert-danger" role="alert">Los correos ingresados no coinciden</div>}
            <h3>Correo electronico</h3>
            <input ref={email}></input>
            <h3>Confirma tu correo</h3>
            <input ref={emailConfirmation}></input>

            <button onClick={validateOrder}>Finalizar Compra</button>

            <PopUp open={abrirPopup} onClose={() => setAbrirPopup(false)} completado={completado} ordenId={ordenId}/>

        </div>
    )



}

export default FinishOrder