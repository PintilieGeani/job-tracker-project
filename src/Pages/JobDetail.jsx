import { useEffect, useState } from "react"
import { useJobContext } from "../context/JobContext"
import { useParams } from "react-router-dom"


export default function JobDetail() {

    const { selectedJob, setShowDetails, addFavorites, favorites} = useJobContext()

    console.log(selectedJob)

    console.log(favorites)


    return (
        <>
            <h1>Sono pagina dettaglio dei job, Provami Nicole</h1>
            {selectedJob && 
            <div className="job-details-scroll">
                <h2>{selectedJob.title}</h2>
                <h3>Company: {selectedJob.company_name}</h3>
                <div  dangerouslySetInnerHTML={{ __html: selectedJob.description }}></div>
                <div className="buttons"></div>
                <button onClick={() => setShowDetails(false)}>Chiudi</button>
                <button onClick={() => addFavorites(selectedJob)}>PREFERITI</button>
                <div className={favorites.find((j) => j.slug === selectedJob.slug) ? "presente" : "non-presente"}>
                    <p>
                        Job aggiunto ai Preferiti
                    </p>
                </div>
            </div>
            }
        </>
    )
}