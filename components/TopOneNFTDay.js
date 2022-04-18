import { useState, useContext } from "react";
import { FaEye} from "react-icons/fa"
import { AiFillPicture } from "react-icons/ai"

import AppContext from "../context/AppContext";


const TopOneNFTDay = () => {
    
    const [isOn,setIsOn] = useState()
    const { isOnGlobal } = useContext(AppContext)



    const handleCard = ()=>{
        console.log("MAnjenado el card")
        setIsOn(!isOn)
    }


    
    
    return ( 
        <div className={`topOneNFTCard ${isOn ? "transactionCard--Higuest" : ""} ${isOnGlobal ? "transactionCard--Hidde" : ""}`}>
            <div className="transactionCard__Title">
                Top 1 NFT
            </div>
            <div className={`topOneNFTCard__containerInfo ${isOn ? "topOneNFTCard__containerInfo--Higuest" : ""}`}>
                
                <div className={`topOneNFTCard__image ${isOn ? "topOneNFTCard__image--Higuest" : ""}`}>
                    <img src="/images/art.png" />
                </div>


                <div className="topOneNFTCard__mainInfoContainer">
                <div className={`topOneNFTCard__mainInfoContainer-TitleContainer ${isOn ? "topOneNFTCard__mainInfoContainer-TitleContainer--Higuest" : ""}`}>
                    <p className="topOneNFTCard__mainInfoContainer-Title">Bored Ape Yacht Club</p>
                    <p className="topOneNFTCard__mainInfoContainer-TagNumber">#8386</p>
                </div>



                <div className="topOneNFTCard__mainInfoContainer-Values">

                    <div className={`topOneNFTCard__mainInfoContainer-Values-Left ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left--Higues" : ""}`}>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-Price ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-Price--Higuest" : ""}`}>Price:</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-Value ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-Value--Higuest" : ""}`}>Value:</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-Floor ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-Floor--Higuest" : ""}`}>Floor Price:</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-LastSale ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-LastSale--Higuest" : ""}`}>Last Sale:</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-Creator ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-Creator--Higuest" : ""}`}>Creator:</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-Owner ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-Owner--Higuest" : ""}`}>Owner:</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Left-Collection ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Left-Collection--Higuest" : ""}`}>Collection:</p>
                    </div>

                    <div className="topOneNFTCard__mainInfoContainer-Values-Right">
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-Price ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-Price--Higuest" : ""}`}>200 WETH</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-Value ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-Value--Higuest" : ""}`}>$589,268.00</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-Floor ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-Floor--Higuest" : ""}`}>83.69 ETC</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-LastSale ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-LastSale--Higuest" : ""}`}>2022-03-03 06:07</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-Creator ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-Creator--Higuest" : ""}`}>Uknown</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-Owner ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-Owner--Higuest" : ""}`}>Uknown</p>
                    <p className={`topOneNFTCard__mainInfoContainer-Values-Right-Collection ${isOn ? "topOneNFTCard__mainInfoContainer-Values-Right-Collection--Higuest" : ""}`}>Boredapeyachtclub</p>
                    </div>


                </div>



                </div>
            
            </div>

            <div className="transactionCard__ContainerButtons">
            
                <div onClick={handleCard} className="transactionCard__btnMoreDetail" id="btn_NFT">
                    More Detail
                    <AiFillPicture className="transactionCard__Icon" size={"18px"} />
                </div>

                <div className="transactionCard__btnGoToBlockChain" id="">
                    <a href="https://www.blockchain.com/" target="__blank" >Go To Blockchain</a>
                </div>

            </div>



            </div>
     );
}
 
export default TopOneNFTDay;