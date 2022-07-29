import { useState, useEffect } from "react"
import { getItem } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [item, setItem] = useState("");

    useEffect(() =>{ getItem().then((response) => {

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