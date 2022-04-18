const Row = ( { hash, amountBTC, amountUSD,time }) => {
    return ( 
        <div class="tableContainer__Row">
    

            <div class="tableContainer__LeftInfo">
                <div class="tableContainer__Row-Hash-String">
                Hash
                </div>
                <div class="tableContainer__Row-Time-String">
                Time
                </div>
                <div class="tableContainer__Row-AmountBTC-String">
                Amount(BTC)
                </div>
                <div class="tableContainer__Row-AmountUSD-String">
                Amount(USD)
                </div>  
            </div>


            <div class="tableContainer__RightInfo">
                <div class="tableContainer__Row-Hash">
                <a class="tableContainer__Row-Hash-Value" href={hash} >
                    {hash}
                </a>
                </div>
                <div class="tableContainer__Row-Time">{time}</div>
                <div class="tableContainer__Row-AmountBTC">{amountBTC} BTC</div>
                <div class="tableContainer__Row-AmountUSD">${amountUSD}</div>
            </div>
            
            
            </div>
     );
}
 
export default Row;