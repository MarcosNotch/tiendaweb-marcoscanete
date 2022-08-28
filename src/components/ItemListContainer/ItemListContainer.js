import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { useParams } from "react-router-dom";
import Carusel from "../Carrusel/Carrusel.js";
import './ItemListContainer.css'
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import PaymentInformation from "../PaymentInformation/PaymentInformation";

const ItemListContainer = ({greenting}) => {

    const [productos, setProductos] = useState([]);

    let [loaded, setLoaded] = useState(false)

    let {categoryID} = useParams()

    useEffect(() => {

        const collectionRef = !categoryID ? collection(db, 'products') : query(collection(db, 'products'), where('category', '==', categoryID))


        getDocs(collectionRef).then((response) => {
                const products = response.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductos(products)
            }).catch(error =>{
                console.log(error)
            }).finally(() => {
                setLoaded(true);
            })



            fetch('http://localhost:8080/usuario')
            .then(response => response.json())
            .then(data => console.log(data));



  
    }, [categoryID])

    if(!loaded){
        return(
            <LoadingAnimation/>
        )
    }


    return (

        <div>
            <h1>{greenting}</h1>
            <div className="carrusel-container">
                <Carusel/>
            </div>
            <div className="payment-method-container">
                <div className="payment-method-principal">
                    <PaymentInformation img={"https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/credit-card.svg"} desc={'Tarjeta De Credito'} altDesc={'Ver promociones bancarias'}/>
                    <PaymentInformation img={"https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/debit-card.svg"} desc={'Tarjeta De Debito'} altDesc={'Ver mas'}/>
                    <PaymentInformation img={"https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/mercado-creditsv2.svg"} desc={'Cuotas Sin Tarjeta'} altDesc={'Conoce Mercado Credito'}/>
                    <PaymentInformation img={"https://http2.mlstatic.com/storage/homes-korriban/assets/images/payments/payment-agreement.svg"} desc={'Efectivo'} altDesc={'Ver mas'}/>
                </div>
            </div>
            <ItemList products={productos}/>
        </div>
    )
}


export default ItemListContainer