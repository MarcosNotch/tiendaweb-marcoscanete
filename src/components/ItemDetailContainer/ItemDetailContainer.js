import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    let {productID} = useParams();
    let [mostrar, setMostrar] = useState(false)
    const [item, setItem] = useState("");

    useEffect(() =>{ getItem(productID).then((response) => {


        setItem(response)
        setMostrar(true)
    }).catch(error =>{
        console.log(error)
    })
}, [productID])


    if(mostrar){
        return (
            <div className="item-detail-container">
            <ItemDetail {...item} />
        </div>
        )
    }

  

}


export default ItemDetailContainer