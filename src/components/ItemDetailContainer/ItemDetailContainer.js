import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {

    let {productID} = useParams();
    let [mostrar, setMostrar] = useState(false)
    let [item, setItem] = useState('Valor inicial');

    async function obtenerProducto(productID){
        // obtengo el producto
        let response = await getDoc(doc(db, 'products', productID));
        const product = {id: productID, ...response.data()}
        // obtengo todas las imagenes del producto
        let collectionRef = query(collection(db, 'imageProducts'), where('product', '==', productID))
    
        let response2 = await getDocs(collectionRef)
      
        const imgs = response2.docs.map(img => {
            return {id: img.id, ...img.data()}
        })
        setItem({product, imgs})
        setMostrar(true)
    }
    
    useEffect(() => {
        try{
            obtenerProducto(productID)
        }catch(e){
            console.log(e)
        }
        
    }, [productID])


    if(mostrar){
 
        return (
            <div className="item-detail-container">
                <ItemDetail item={item} />
            </div>
        )
    }

  

}


export default ItemDetailContainer