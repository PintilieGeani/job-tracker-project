import { useJobContext } from "../context/JobContext";


export default function Favorites(){
    const {favorites, selectedJob, setSelectedJob, setShowDetails} = useJobContext()



    const handleOpenDetail = (job) => {
        setSelectedJob(job)
        setShowDetails(true)
    }

    return(
        <>
        <h1>PREFERITI</h1>
        <div className="favorites-card-container">
            {favorites.map((job) => (
                <div 
                onClick={() => handleOpenDetail(job)}
                className="favorites-card">
                    <h4>{job.title}</h4>
                    <h6>Company: {job.company_name}</h6>
                </div>
            ))}
        </div>
        </>
    )

} 