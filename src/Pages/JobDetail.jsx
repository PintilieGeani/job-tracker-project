import { useJobContext } from "../context/JobContext"


export default function JobDetail() {

    const { prova} = useJobContext()


    return (
        <>
            <h1>Sono pagina dettaglio dei job</h1>
        </>
    )
}