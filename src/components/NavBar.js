import "./NavBar.css";

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

                    <div className="cart-shop-icon-container">
                        <img src={"images/cart-shop-icon.png"} alt="imagenCarrito"/>
                    </div>

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