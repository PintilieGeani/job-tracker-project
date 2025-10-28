import { useJobContext } from "../context/JobContext";
import { Link } from "react-router-dom"


export default function Favorites(){
    const {favorites, selectedJob, setSelectedJob, setShowDetails} = useJobContext()



    const handleOpenDetail = (job) => {
        setSelectedJob(job)
        setShowDetails(true)
    }

    return(
        <>
        <div className="container">
            <div className="main-logo">
                <img src="./logo.png" alt="Logo" />
                </div>
            <div className="favorites-cards-container">

            {favorites.map((job) => (
                <div 
                onClick={() => handleOpenDetail(job)}
                className="favorites-job-card">
                    <h4><Link
                                    onClick={() => handleOpenDetail(job)}>{job.title}</Link></h4>
                                <p><strong>Company:</strong> {job.company_name}</p>
                                <p><strong>Location:</strong> {job.location}</p>
                                <p><strong>Job Type:</strong> {job.job_types?.length> 0 ? job.job_types.join(", ") : "ND"}</p>
                                {/* Aggingere il label per il remoto */}
                                <p><strong>Tags:</strong> {job.tags.join(", ")}</p>
                </div>
            ))}
            </div>
        </div>
        </>
    )

} 