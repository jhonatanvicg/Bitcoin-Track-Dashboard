import { useState,useContext } from "react";
import { FaEye, FaBitcoin} from "react-icons/fa"
import AppContext from "../context/AppContext";


const TransactionDay = ({ classN,title,time,amountBTC,amountUSD }) => {
    
    const [isOn,setIsOn] = useState(false)
    const { isOnGlobal } = useContext(AppContext)


    const handleCard = ()=>{
        console.log("MAnejando el card")
        setIsOn(!isOn)
    }
    
    
    return ( 
        <div className={`transactionCard ${isOn ? "transactionCard--Higuest" : ""}  ${isOnGlobal ? "transactionCard--Hidde" : ""}`}>
            <div className="transactionCard__Title">
                <i className={classN} ></i>
                {title}
            </div>

            <div className={`transactionCard__mainInfo  ${isOn ? "transactionCard__mainInfo--Higuest" : ""}`}>


                <div className={`transactionCard__mainInfo-Hash ${isOn ? "transactionCard__mainInfo-Hash--Higuest" : ""} `}>
                <div className="transactionCard__mainInfo-Hash-String">Hash</div>
                <div className="transactionCard__mainInfo-Hash-Value">1214564654165654214654a6s45dasd32a65sda6</div>
                </div>  



                <div className={`transactionCard__mainInfo-Time ${isOn ? "transactionCard__mainInfo-Time--Higuest" : ""} `}>
                <div className="transactionCard__mainInfo-Time-String">Time</div>
                <div className="transactionCard__mainInfo-Time-Value">${time}</div>
                </div>
                <div className={`transactionCard__mainInfo-AmountBTC ${isOn ? "transactionCard__mainInfo-AmountBTC--Higuest" : ""}`}>
                <div className="transactionCard__mainInfo-AmountBTC-String">Amount(BTC)</div>
                <div className="transactionCard__mainInfo-AmountBTC-Value">${amountBTC}</div>
                </div> 
                <div className={`transactionCard__mainInfo-AmountUSD ${isOn ? "transactionCard__mainInfo-AmountUSD--Higuest" : ""} `}>
                <div className="transactionCard__mainInfo-AmountUSD-String">Amount(USD)</div>
                <div className="transactionCard__mainInfo-AmountUSD-Value">$${amountUSD}</div>
                </div>
                

                
                <div className={`transactionCard__mainInfo-Status ${isOn ? "transactionCard__mainInfo-Status--Higuest" : ""} `}>
                <div className="transactionCard__mainInfo-Status-String">Status</div>
                <div className="transactionCard__mainInfo-Status-Value">Unconfirmed</div>
                </div>  
                <div className={`transactionCard__mainInfo-Confirmations ${isOn ? "transactionCard__mainInfo-Confirmations--Higuest" : ""} `}>
                <div className="transactionCard__mainInfo-Confirmations-String">Confirmations</div>
                <div className="transactionCard__mainInfo-Confirmations-Value">0</div>
                </div>  
            

            </div>

            <div className="transactionCard__ContainerButtons">
            
                <div onClick={handleCard} className={`transactionCard__btnMoreDetail ${isOn ? "transactionCard__btnMoreDetail--Higuest" : ""}l`} id="${idBtn}">
                    More Detail
                    <FaEye className="transactionCard__Icon" size={"18px"} />
                </div>

                <div className={`transactionCard__btnGoToBlockChain ${isOn ? "transactionCard__btnGoToBlockChain--Higuest" : ""} `} id="${idBtn}">
                    <a href="https://www.blockchain.com/" target="__blank" >Go To Blockchain</a>
                    <FaBitcoin className="transactionCard__Icon" size={"25px"} />
                </div>
            </div>



            </div>
     );
}
 
export default TransactionDay;