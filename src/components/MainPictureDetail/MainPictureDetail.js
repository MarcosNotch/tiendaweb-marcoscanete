import { useState } from "react"

const MainPictureDetail = ({img})=> {


    return (
        <div className="container-imagen-detalle">
            <img className="imagen-detalle" src={img} alt='imagen del producto'/>
         </div>   
    )

}


export default MainPictureDetail