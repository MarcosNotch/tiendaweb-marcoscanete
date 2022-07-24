import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const ItemListContainer = ({greenting}) => {

    const [productos, setProductos] = useState([]);

    let [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getProducts().then((response) => {
            setProductos(response);
           
        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoaded(true);
        })
    }, [])

    if(!loaded){
        return(
            <LoadingAnimation/>
        )
    }


    return (
        <div>
            <h1>{greenting}</h1>
            <ItemList products={productos}/>
        </div>
    )



}


export default ItemListContainer