import './Item.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/CartContext';

const Item = ({product}) => {
    console.log(product)
    return(
        <div>
            <Link to={`/itemDetail/${product.id}`}>
            <div className='contenido'>
                <div className='image-container'>
                    <img src={product.img} alt="imagen del producto"/>
                </div>
                <div className="nombre-container">
                    <p>$ {product.price}</p>
                </div>
            </div>
            </Link>
        </div>
    )

}


export default Item;