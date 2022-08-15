import './Item.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/CartContext';

const Item = ({product}) => {
    return(
        <div>
            <Link to={`/itemDetail/${product.id}`}>
            <div className='contenido'>
                <div className='image-container'>
                    <img src={product.imgs[0].img} alt="imagen del producto"/>
                </div>
                <div className="nombre-container">
                    <p>{product.name}</p>
                </div>
                <div className='precio-container'>
                
                    <div className='envio'>
                        <p>Envio {product.shipping}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )

}


export default Item;