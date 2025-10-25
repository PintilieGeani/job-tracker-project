import { Link } from "react-router-dom"
import { useJobContext } from "../context/JobContext"
import { useEffect } from "react"


export default function JobList() {


    const { showDetails, setShowDetails, jobs, selectedJob, setSelectedJob } = useJobContext()

    console.log(showDetails)
    console.log(jobs)

    const provaToggle = () => {
        if (showDetails) {
            setShowDetails(false)
        } else {
            setShowDetails(true)
        }
    }

    useEffect(() => {
        setShowDetails(false)
    },[])

    const handleOpenDetail = (job) => {
        setSelectedJob(job)
        setShowDetails(true)
    }



    return (
        <>
            <div className="container">
                <h1>Sono la lista dei job, Provami Nicole</h1>
                <div>
                    <button
                        onClick={provaToggle}
                    >
                        Prova Toggle
                    </button>
                </div>

                <h2>Lista dei lavori disponibili</h2>
                <div className="cards-container">

                    {jobs.length > 0 &&
                        jobs.map((job) => (
                            <div>
                                <h4><Link
                                    onClick={() => handleOpenDetail(job)}>{job.title}</Link></h4>
                                <p>Company: {job.company_name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>

        </>
    )
}