import { useEffect } from "react"
import { useJobContext } from "../context/JobContext"

export default function Home() {

    const {setShowDetails} = useJobContext()

    useEffect(() => {
        setShowDetails(false)
    },[])

    

    return (
        <>
       <div className="container">
        <div className="banner">
            <div className="banner-img">
            <img src="./logo.png" alt="Logo" />
            </div>
            <div className="banner-text">
                <h1>Benvenuti nel mio JobTracker</h1>
            </div>
        </div>
       </div>
        </>
    )
}