import { createContext, useContext, useState, useEffect } from "react"

const JobContext = createContext()

export const JobProvider = ({children}) => {

    const [showDetails , setShowDetails] = useState(false)
    const apiUrl = "https://www.arbeitnow.com/api/job-board-api"

    const [jobs, setJobs] = useState([])
    const [selectedJob, setSelectedJob] = useState(null)


    console.log("diocane sono il context")

    const fetchApi = async () => {
        try{
            const response = await fetch(apiUrl)
            const data = await response.json()
            setJobs(data.data)
        }
        catch (error){
            console.error("Errore durante il recuper dei dati dall'Api", error)
        }
    }


    


    useEffect(() => {
        fetchApi()
    },[])

    console.log(jobs)
    
    return(

        <JobContext.Provider
        value={{
            showDetails,
            setShowDetails,
            jobs,
            setJobs,
            apiUrl,
            selectedJob,
            setSelectedJob
        }}
        >
            {children}
        </JobContext.Provider>
    )
}

//Hook personalizzato 

export const useJobContext = () => useContext(JobContext)