import { useEffect, useState } from "react"
import { useJobContext } from "../context/JobContext"
import { useParams } from "react-router-dom"


export default function JobDetail() {

    const { selectedJob, setSelectedJob} = useJobContext()

    console.log(selectedJob)


    return (
        <>
            <h1>Sono pagina dettaglio dei job, Provami Nicole</h1>
            {selectedJob && 
            <div className="job-details-scroll">
                <h2>{selectedJob.title}</h2>
                <h3>Company: {selectedJob.company_name}</h3>
                <div  dangerouslySetInnerHTML={{ __html: selectedJob.description }}></div>
            </div>
            }
        </>
    )
}