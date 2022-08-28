import './PaymentInformation.css'

const PaymentInformation = ({img, desc, altDesc}) => {
    
    
    return ( 
        <div className="payment-method">  
            <div>
                <img src={img} alt="imagen"/> 
            </div>
            <div className='titles-container'>
                <div>
                    <p className='payment-title'>{desc}</p>
                </div>
                <div>
                    <p className='payment-subtitle'>{altDesc}</p>
                </div>
            </div>
        </div>
     );
}
 
export default PaymentInformation;