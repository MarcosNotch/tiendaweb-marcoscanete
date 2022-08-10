import "./NavBar.css";
import CarWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/CartContext";

const NavBar = () => {

    return (
        <nav>

            <div className="navbar">

              
                    <div className='contenedor-logo'>
                        <Link to={"/"}>
                        <img src={'images/mercado-libre-logo.png'} alt="Logo"/>
                        </Link>
                    </div>
              
                <div>

                    <ul>
                        <li>
                            <Link to={`/category/monitor`}>Notebooks</Link>
                        </li>
                        <li>
                            <Link to={`/category/celular`}>Celulares</Link>
                        </li>
                        <li>
                            <Link to={`/category/tablet`}>Tablets</Link>
                        </li>
                    </ul>
                
                </div>

                <div>

                   <CarWidget/>

                    <div>
                        
                    </div>

                    <div>
                    </div>
                
                </div>

            </div>
        
        </nav>


    )



}
export default NavBar;