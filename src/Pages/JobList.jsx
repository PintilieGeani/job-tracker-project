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

    const handleOpenDetail = (job) => {
        setSelectedJob(job)
        setShowDetails(true)
    }



    return (
        <>
            <div className="container">
                <h1>Sono la lista dei job, Provami Nicole</h1>
                <h3>
                    Adesso se tu clicchi su un lavoro ti divide in due lo schermo e ti fa vedere i dettagli di ogni job, se clicchi su un'altro dovrebbe cambiare solo i dettagli ma resti sulla stessa pagina, se clicchi su prova toggle ti chiude nil lato destro o te lo apre a seconda dello stato in cui sei.
                </h3>
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