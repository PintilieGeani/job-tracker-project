import { createContext, useContext, useState, useEffect } from "react"

const JobContext = createContext()

export const JobProvider = ({ children }) => {

    const [showDetails, setShowDetails] = useState(false)
    const apiUrl = "https://www.arbeitnow.com/api/job-board-api"

    const [jobs, setJobs] = useState([])
    const [selectedJob, setSelectedJob] = useState(null)
    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorite-jobs")
        return stored ? JSON.parse(stored) : []
    })

    useEffect(() => {
        localStorage.setItem("favorite-jobs", JSON.stringify(favorites))
    }, [favorites])


    console.log("diocane sono il context")

    const fetchApi = async () => {
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            setJobs(data.data)
        }
        catch (error) {
            console.error("Errore durante il recuper dei dati dall'Api", error)
        }
    }


    useEffect(() => {
        fetchApi()
    }, [])

    console.log(jobs)

    const addFavorites = (job) => {
       setFavorites((prev) => {
    const alreadySaved = prev.find((j) => j.slug === job.slug)

    let updated
    if (alreadySaved) {
      // 🔻 Rimuovi se già presente
      updated = prev.filter((j) => j.slug !== job.slug)
      console.log("Job rimosso:", job.title)
    } else {
      // ❤️ Aggiungi se non presente
      updated = [...prev, job]
      console.log("Job aggiunto:", job.title)
    }

    return updated
  })
    }



    return (

        <JobContext.Provider
            value={{
                showDetails,
                setShowDetails,
                jobs,
                setJobs,
                apiUrl,
                selectedJob,
                setSelectedJob,
                favorites,
                addFavorites
            }}
        >
            {children}
        </JobContext.Provider>
    )
}

//Hook personalizzato 

export const useJobContext = () => useContext(JobContext)