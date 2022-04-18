import {useContext} from "react"
import TransactionDay from "../components/TransactionDay"
import TopOneNFTDay from "../components/TopOneNFTDay"
import ShowCards from "../components/showCards"
import Table from "../containers/Table"
import AppContext from "../context/AppContext"
import getData from "../hook/useScrapping"


const HomePage = ()=>{

    const { isOnGlobal } = useContext(AppContext)
    getData()
    return(
        <>
            <ShowCards />
            <div className={`transactionCardsContainer ${isOnGlobal ? "transactionCardsContainer--Hide" : ""}`}>

                <TransactionDay 
                    classN="fa fa-arrow-alt-circle-up" 
                    title="Higuest Transaction of the Day" 
                    time="16:20"
                    amountBTC="1.76847752"
                    amountUSD="77,232.30"
                />

                <TransactionDay 
                    classN="fa fa-arrow-alt-circle-down" 
                    title="Lowest Transaction of the Day" 
                    time="16:20"
                    amountBTC="1.76847752"
                    amountUSD="77,232.30"
                />

                <TopOneNFTDay idBtn={"btn_NFT"} />

            </div>
            <Table />
        </>  
    ) 
        
}

export default HomePage