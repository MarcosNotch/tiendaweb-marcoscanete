import './Item.css';


const Item = ({product}) => {

    return(
        <div>
            <div className='contenido'>
                <div className='image-container'>
                    <img src={product.img} alt="imagen del producto"/>
                </div>
                <div className="nombre-container">
                    <p>{product.name}</p>
                </div>
                <div className='precio-container'>
                    <div className='precio'> 
                        <p>${product.price}</p>
                    </div>
                    <div className='envio'>
                        <p>Envio {product.shipping}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Item;