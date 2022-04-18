import { useContext } from "react";
import { FaArrowCircleDown } from "react-icons/fa"
import AppContext from "../context/AppContext";


const ShowCards = () => {

    const { isOnGlobal,setIsOnGlobal } = useContext(AppContext)

    const handleHide = ()=>{
        setIsOnGlobal(!isOnGlobal)
    }

    return ( 
        <div className="showCards">
            <div className="showCards__String">Show Transactions Cards</div>
            <FaArrowCircleDown 
                onClick={handleHide} 
                className={`arrowDown ${isOnGlobal ? "arrowDown--Hide" : ""}`} 
                color="white" 
                size={"30px"} 
            />
        </div>
     );
}
 
export default ShowCards;