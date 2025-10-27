import { Link } from "react-router-dom"
import { useJobContext } from "../context/JobContext"
import { useEffect, useState, useCallback } from "react"


export default function JobList() {


    const { showDetails, setShowDetails, jobs, selectedJob, setSelectedJob } = useJobContext()
    const [query, setQuery] = useState("")
    const [filteredJobs, setFilteredJobs] = useState([])

    // DEBOUNCE
    const debounce = (func, delay) => {
        let timer
        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => func(...args), delay)
        }
    }

    const handleSearch = useCallback(
        debounce((text) => {
            const lower = text.toLowerCase()
            const results = jobs.filter((job) =>
                job.title.toLowerCase().includes(lower)
            )
            setFilteredJobs(results)
        }, 300), // 300ms di ritardo
        [jobs]
    )

    console.log(showDetails)
    console.log(jobs)


    useEffect(() => {
        handleSearch(query)
    }, [query, handleSearch])

    const provaToggle = () => {
        if (showDetails) {
            setShowDetails(false)
        } else {
            setShowDetails(true)
        }
    }

    useEffect(() => {
        setShowDetails(false)
    }, [])

    const handleOpenDetail = (job) => {
        setSelectedJob(job)
        setShowDetails(true)
    }

    console.log(query)




    return (
        <>
            <div className="container">
                <div className="main-logo">
                <img src="./logo.png" alt="Logo" />
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Es: Web Developer"
                />
                <div className="cards-container">

                    {jobs.length > 0 &&
                        query
                        ? filteredJobs.length > 0
                            ? filteredJobs.map((job) => (
                                <div className="job-card" key={job.slug}>
                                    <h4><Link
                                        onClick={() => handleOpenDetail(job)}>{job.title}</Link></h4>
                                    <p>Company: {job.company_name}</p>
                                    <p>Location: {job.location}</p>
                                </div>))
                            : <p>Nessun risultato Trovato</p>


                        : jobs.map((job) => (
                            <div className="job-card" key={job.slug}>
                                <h4><Link
                                    onClick={() => handleOpenDetail(job)}>{job.title}</Link></h4>
                                <p><strong>Company:</strong> {job.company_name}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Job Type:</strong> {job.job_types?.length> 0 ? job.job_types.join(", ") : "ND"}</p>
                                {/* Aggingere il label per il remoto */}
                                <p><strong>Tags:</strong> {job.tags.join(", ")}</p>

                            </div>
                        ))

                    }

                </div>
            </div>

        </>
    )
}

