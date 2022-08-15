import MiniPicture from "../../MiniPicture/MiniPicture"
import MainPictureDetail from "../../MainPictureDetail/MainPictureDetail"
import { useState } from "react"


const LeftDetail = ({imgs}) => {

    
function cambiarImagenPrincipal(id){
    setimagenPrincipal(imgs.find(e => e.id === id).img)
}



let [imagenPrincipal, setimagenPrincipal] = useState(imgs[0].img)

    return (

        <div className='left-container'>
            <div className="mini-container">
                {imgs.map(e => <MiniPicture key={e.id} picture={e} cambiarImagenPrincipal={cambiarImagenPrincipal}/>)}
            </div>
            <MainPictureDetail img={imagenPrincipal}/>             
        </div>

    )
}

export default LeftDetail