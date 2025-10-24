import { useEffect } from "react"
import { useJobContext } from "../context/JobContext"

export default function Home() {

    const {setShowDetails} = useJobContext()

    useEffect(() => {
        setShowDetails(false)
    },[])

    

    return (
        <>
        <h1>Sono la home page</h1>
        <h3>
            Benvenuti nel mio JOB TRACKER 🤍.
        </h3>
        </>
    )
}