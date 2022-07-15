import "./NavBar.css";
import CarWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <nav>

            <div className="navbar">

                <div className='contenedor-logo'>

                    <img src={'images/logo192.png'} alt="Logo"/>
                
                </div>

                <div>

                    <ul>
                        
                        <li>Categorias</li>
                        <li>Zapatillas</li>
                        <li>Marcas</li>
                        <li>Outlet</li>

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