import { useState } from "react"

const useHiddeElements = ()=>{
    const [isOnGlobal,setIsOnGlobal] = useState(false)

    return{
        isOnGlobal,setIsOnGlobal
    }
}

export default useHiddeElements;