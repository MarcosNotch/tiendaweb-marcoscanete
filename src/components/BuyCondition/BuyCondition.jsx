import "./BuyCondition.css"



const BuyCondition = ({logo, blueWords, grayWords}) => {
    return ( 
        <div className="conditions-text">
            <i className="fa-solid fa-turn-down-left">asasda</i>
            <div>
                <p className="blue-text">{blueWords}</p>
                <p>{grayWords}</p>
            </div>
        </div>
     );
}
 
export default BuyCondition;