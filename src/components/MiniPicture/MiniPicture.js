import './MiniPicture.css'
import { useEffect, useRef } from 'react'

const MiniPicture = ({picture, cambiarImagenPrincipal}) => {

    const divRef = useRef(null)


    

    return (

        <div ref={divRef} onMouseOver={() => cambiarImagenPrincipal(picture.id)} className="mini-picture-container">
            <img  src={picture.img} alt=''/>
        </div>

    )
}

export default MiniPicture