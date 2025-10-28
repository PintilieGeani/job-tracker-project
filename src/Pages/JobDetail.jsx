import { useEffect, useState } from "react"
import { useJobContext } from "../context/JobContext"
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";


export default function JobDetail() {

    const { selectedJob, setShowDetails, addFavorites, favorites } = useJobContext()

    console.log(selectedJob)

    console.log(favorites)


    return (
        <>
            {selectedJob &&
                <div className="job-details-scroll">
                    <h1>{selectedJob.title}</h1>
                    <h3>Company: {selectedJob.company_name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: selectedJob.description }}></div>
                    <div className="buttons">
                        <button className="btn" onClick={() => setShowDetails(false)}>Chiudi</button>
                        <button className="btn" onClick={() => addFavorites(selectedJob)}>{favorites.find((j) => j.slug === selectedJob.slug)
                            ? <FontAwesomeIcon icon={faStar} />
                            : <FontAwesomeIcon icon={faStarRegular} />}
                            </button>
                    </div>
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