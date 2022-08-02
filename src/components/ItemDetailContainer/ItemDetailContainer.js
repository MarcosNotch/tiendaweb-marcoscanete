import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    let {productID} = useParams();

    const [item, setItem] = useState("");

    useEffect(() =>{ getItem(productID).then((response) => {


        setItem(response)

    }).catch(error =>{
        console.log(error)
    })
}, [])

    return (
        <div className="item-detail-container">
            <ItemDetail {...item} />
        </div>
    )

}


export default ItemDetailContainer