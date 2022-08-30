import "./BuyCondition.css"



const BuyCondition = ({logo, blueWords, grayWords}) => {
    return ( 
        <div className="conditions-text">
     
            <i className={logo}></i>
            <div>
                <p className="blue-text">{blueWords}</p>
                <p>{grayWords}</p>
            </div>
        </div>
     );
}
 
export default BuyCondition;